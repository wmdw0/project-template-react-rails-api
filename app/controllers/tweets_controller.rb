class TweetsController < ApplicationController
    wrap_parameters false
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :authorize

    def index        
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        tweets = Tweet.all.includes(:user).order("created_at DESC")
        puts json: tweets
        puts json: tweets.to_a
        render json: tweets
      end

 
    def create
        userstuff =  User.find_by(id: session[:user_id])
        puts "CREATING TWEET"
        puts userstuff
        if tweet_params[:image]
          tweet = Tweet.create({content: tweet_params[:content], user: userstuff, image: tweet_params[:image], location: tweet_params[:location] })
        else
          tweet = Tweet.create({content: tweet_params[:content], user: userstuff, location: tweet_params[:location] })
        end
        if tweet.valid?
          render json: tweet, status: :created
        else
          render json: { errors: tweet.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def show
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        tweet = Tweet.find(params[:id])
        render json: tweet
      end

    def increment_likes
      tweet = Tweet.find_by(id: params[:id])
      if tweet
        tweet.update(likes: tweet.likes + 1)
        render json: tweet.likes
      else
        render json: { error: "Tweet not found" }, status: :not_found
      end
    end
    

  def is_in_stock
    
    tweet = find_tweet
    tweet.update(tweet_params)
    render json: tweet
  end

    def update
      
      puts "HITTING UPDATE ENDPOINT"
      puts params
      tweet = find_tweet_update
      tweet.update(content: params[:content])
      render json: tweet
    end

    def destroy
        tweet = find_tweet
        tweet.destroy
        head :no_content
      end

    # def is_liked
    #     tweet = Tweet.find_by(id: params[:id])
    #     if tweet
    #         tweet.update(likes: params[:likes])
    #         render json: tweet, status: :accepted
    #     else 
    #         render json: {error: "tweet not found"}, status: not_found
    #     end
    #     # tweet = find_tweet
    #     # tweet.update(tweet_params)
    #     # render json: tweet
    # end

    private
    
    def find_tweet
        Tweet.find(params[:id])
    end
    def find_tweet_update
      Tweet.find(params[:id])
  end

    def tweet_params
        params.permit(:id, :content, :image, :location, :likes)
    end

    def authorize
        puts session[:tweet_id]
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
    
      def record_not_found
        render json: { error: "Tweet not found" }, status: :not_found
      end

end
