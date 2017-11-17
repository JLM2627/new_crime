class Api::CommentsController < ApplicationController

    def index
        @comments = Crime.find(params[:crime_id]).comments
       
        #  @comments = Comment.all 
        render json: @comments
    end

    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    def create
      @crime = Crime.find(params[:crime_id])
      @comment = @crime.comments.new(comment_params)

      @crime.comments << @comment
      @crime.save!

      render json: @comment
   
  end

    def update
         @comment = Comment.find(params[:id])
         @comment.update!(comment_params)
        puts "Phrasing...Boom!"
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

