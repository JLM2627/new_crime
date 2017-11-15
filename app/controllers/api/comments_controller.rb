class Api::CommentsController < ApplicationController

    def index
        @comments = User.find(params[:user_id]).comments
       
        #  @comments = Comment.all 
        render json: @comments
    end

    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    def create
      @user = User.find(params[:user_id])
      @comment = Comment.new(comment_params)

      @user.comments << @comment
      @user.save!

      render json: @comment
   
  end

    def update
        @comment = Comment.find(params[:id])
        @comment.update!(comment_params)

        render json: @comment
    end

       def destroy
        @comment = Comment.find(params[:id]).delete
        render status: :ok
    end

       private

      def comment_params
     params.require(:comment).permit(:title, :description)
      end
    end

