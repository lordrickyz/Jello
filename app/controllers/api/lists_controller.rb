class Api::ListsController < ApplicationController

  def index
    @lists = List.where(board_id: params[:board_id])
    render :index
  end

  def create
    @lists = List.where(board_id: params[:board_id])
    list = List.new(list_params)
    list.board_id = params[:board_id]
    if list.save
      if @lists.length > 1
        list.updateLists(@lists[-2].id)
      end
      @lists
      render :index
    else
      render json: list.errors.full_messages, status: 422
    end
  end

  def show
    @list = List.find(params[:id])
    render :show
  end


  def update
    list = List.find(params[:id])
    if list
      if list_params[:prev_id] && list_params[:next_id]
        list.updateLists(list_params[:prev_id], list_params[:next_id])
      else
        list.update(list_params)
      end
      @lists = List.where(board_id: list.board_id)
      render :index
    else
      render json: list.errors.full_messages, status: 404
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
