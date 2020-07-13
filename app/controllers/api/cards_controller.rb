class Api::CardsController < ApplicationController

  def index
    @cards = Card.all.where(list_id: params[:list_id])
    render :index
  end

  def create
    @card = Card.new(card_params)
    @card.description = params[:card][:description] || ""
    @card.author_id = current_user.id
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 404
    end
  end

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def update
    card = Card.find(params[:id])
    if card
      if card_params[:list_id]
        old_list_id = card.list_id
        card.update_attribute(:list_id, card_params[:list_id])
        @cards = Card.where(list_id: [card.list_id, old_list_id])
      else
        card.update_attributes({title: card_params[:title], description: card_params[:description]})
        @cards = Card.where(list_id: card.list_id)
      end
      render :index
    else
      render json: card.errors.full_messages, status: 404
    end
  end

  def destroy
    @card = Card.find_by(id: params[:id])

    if @card.destroy
      render :show
    else
      render json: { message: 'Could not be deleted' }, status: 404
    end
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :list_id, :prev_id, :next_id)
  end

end
