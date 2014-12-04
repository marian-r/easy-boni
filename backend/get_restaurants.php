<?php

file_put_contents('../app/restaurants.json', file_get_contents('http://bonar.si/api/restaurants'));
