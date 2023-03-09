class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorized 

  def current_user 
    User.find_by_id(session[:user_id])
  end

  def logged_in?
    !!session[:user_id]
  end

  def authorized 
    render json: { errors: ["You must be logged in"]}, status: :unauthorized unless logged_in?
  end

private

def render_not_found_response(exception)
  render json: { error: "#{exception.model} not found" }, status: :not_found 
end

def render_unprocessable_entity_response(exception)
  render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
end



end
