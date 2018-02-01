class TestController < ApplicationController
  def index
    @test = Posting.new
  end
end
