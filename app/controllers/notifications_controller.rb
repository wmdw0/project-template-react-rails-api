class NotificationsController < ApplicationController
    def index
        notification = Notification.all
        render json: notification
    end

    def show
        notification = Notification.find_by(id:params[:id])
        render json: notification
    end
end
