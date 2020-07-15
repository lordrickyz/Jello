class Api::CardsController < ApplicationController

  def obtain_cards
    @cards = Card.where(list_id: params[:list_id])
  end

  def index
    obtain_cards()
  end

  def create
    obtain_cards()
    card = Card.new(card_params)
    card.list_id = params[:list_id]
    if card.save
      if @cards.length > 1
        card.updateCards(@cards[-2].id)
      end
      obtain_cards()
      render :index
    else
      render json: card.errors.full_messages, status: 422
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
        card.updateCards(card_params[:prev_id], card_params[:next_id])
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
