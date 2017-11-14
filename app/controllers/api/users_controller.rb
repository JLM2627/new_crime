class Api::UsersController < ApplicationController

    def index
        @users = User.all

        render json: @users
    end

    def create
        # user_params = params.require(:user).permit(:name, :email, :password)
        @user = User.new(user_params)
        
        if @user.save
            render json: @user
        end
     end

    def show
        user_id = params[:id]
        @user = User.find_by_id(user_id)
    

        render json: @user
    end

    def update
        user_id = params[:id]
        @user = User.find_by_id(user_id)
        # user_params = params.require(:user).permit(:name, :email, :password)

        @user.update_attributes(user_params)

        render json: @user
    
        def destroy
            user_id = params[:id]
            @user = User.find_by_id(user_id)

            @user.destroy

            render json: {
                msg: "succesfully destroyed!"
            }

        end
    end



    private

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end    
end