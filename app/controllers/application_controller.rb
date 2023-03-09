class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize 

  def current_user 
    User.find_by_id(session[:user_id])
  end

  def logged_in?
    !!session[:user_id]
  end

  def authorize 
    render json: { errors: ["You must be logged in"]}, status: :unauthorized unless logged_in?
  end

  def authorized
    render json: { errors: ["You are already logged in"]}, status: :unauthorized if logged_in?
  end

  def authorize_user_resource(user_id)
    render json: { errors: ["You are not authorized to edit this resource."]}, status: :unauthorized unless user_id == current_user.id 
  end

private

def render_not_found_response(exception)
  render json: { error: "#{exception.model} not found" }, status: :not_found 
end

def render_unprocessable_entity_response(exception)
  render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
end



end
