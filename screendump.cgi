#! /usr/bin/ruby
# -*- coding: utf-8 -*-

require 'cgi'

cgi = CGI.new('html3')

datestr = Time.now.strftime('%Y%m%d%H%M%S')
logfile = "/tmp/#{datestr}.png"

# 音を出さずにスクリーンショットをとる
system "/usr/sbin/screencapture -x #{logfile}"


