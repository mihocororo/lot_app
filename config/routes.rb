Rails.application.routes.draw do
  get 'weathers/index'
  get 'roulette'=>'fortunes#roulette'
  get 'gatya'=>'fortunes#gatya'
  # get 'homes/top'
  root to: 'homes#top'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
