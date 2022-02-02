class TrendingsController < ApplicationController
    def index
        trending = Trending.all
        render json: trending
    end

    def show
        trending = Trending.find_by(id:params[:id])
        render json: trending
    end

end