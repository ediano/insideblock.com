source 'http://rubygems.org'

gem "jekyll"

group :jekyll_plugins do
  gem "jekyll-paginate-v2"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
  gem "jekyll-admin"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?