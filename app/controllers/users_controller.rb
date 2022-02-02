class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    # def create
    #     user = User.create(user_params)
    #     render json: user, status: :created
    # end
    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #       render json: user
    #     else
    #       render json: { error: "Not authorized" }, status: :unauthorized
    #     end
    # end
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    # def update 
    #     user = find_user
    #     user.update(user_params)
    #     render json: user
    # end

    # def is_liked
    #     user = find_user
    #     user.update(user_params)
    #     render json: user
    # end

    private
    
    def find_user
        User.find(params[:id])
    end

    def user_params
      params.permit(:username, :password, :password_confirmation, :displayName, :avatar, :text)
    end

    # def render_not_found_response
    #     render json: {error: "Tweet not found"}, status :not_found
    # end

    # def show 
    #     user = User.find_by(id:params[:id])
    #     if user
    #         render json: user, status :ok
    #     else
    #         render json: {error: "user not found"}, status: :not_found
    #     end
    # end
end
