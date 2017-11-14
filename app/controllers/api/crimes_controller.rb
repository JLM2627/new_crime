class Api::CrimesController < ApplicationController

     def index
    @crimes = Crime.all
    render json: @crimes
  end

  def create
    @acrime = Crime.create!(crime_params)

    render json: @crime
  end

  def show
    @crime = Crime.find(params[:id])
    @comments = @crime.comments
    render json: {
        crime: @crime,
        comments: @comments
  }
  end

  def update
    @crime = Crime.find(params[:id])
    @crime.update!(crime_params)

    render json: @crime
  end

  def destroy
    @crime = Crime.find(params[:id]).delete

    render status: :ok
  end

  private

  def crime_params
    params.require(:crime).permit(:title, :description)
  end
end
