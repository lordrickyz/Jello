class Api::ListsController < ApplicationController

  def index
    @lists = List.all.where(board_id: params[:board_id])
    render :index
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def show
    @list = List.find_by(id: params[:id])
    render :show
  end

  def update
    @list = List.find_by(id: params[:list][:id])
    @list.title = params[:list][:title]

    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find_by(id: params[:id])

    if @list.destroy
      render :show
    else
      render json: { message: 'Could not be deleted' }, status: 422
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :board_id, :prev_id, :next_id)
  end

end
