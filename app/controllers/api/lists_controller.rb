class Api::ListsController < ApplicationController
  def index
    @lists = List.where(board_id: params[:board_id])
    render :index
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 404
    end
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 404
    end
  end

  def destroy
    @list = List.find_by(id: params[:id])

    if @list.destroy
      render :show
    else
      render json: { message: 'Could not be deleted' }, status: 404
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :board_id)
  end
end
