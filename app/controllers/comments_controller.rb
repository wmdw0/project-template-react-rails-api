class CommentsController < ApplicationController
    def create
        @tweet = Tweet.find(params[:tweet_id])

        if @tweet.comments.create(comment_params)
            redirect_to @tweet,
                        notice: "Comment was successfully created"
        else 
            redirect_to @tweet,
                        alert: "Error creating comment"
        end
    end

    private 

    def comment_params
        params.permit(:id, :content, :image)
    end 
end
