require "test_helper"

class FortunesControllerTest < ActionDispatch::IntegrationTest
  test "should get roulette" do
    get fortunes_roulette_url
    assert_response :success
  end

  test "should get gatya" do
    get fortunes_gatya_url
    assert_response :success
  end
end
