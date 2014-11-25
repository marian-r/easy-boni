<?php

use EasyBoni\Model\RestaurantsManager;
use Nette\Application\ForbiddenRequestException;
use Nette\Application\UI\Presenter;

/**
 *
 * @author Marian Rusnak
 */
class RestaurantPresenter extends Presenter
{
    /** @var RestaurantsManager @inject */
    public $restaurantsManager;


    public function actionAddRating($restaurantID, $value)
    {
        if (!$this->user->isLoggedIn()) {
            throw new ForbiddenRequestException;
        }

        $userID = $this->user->id;
        $this->restaurantsManager->addRating($restaurantID, $userID, $value);

        $row = $this->restaurantsManager->findRatingByID($restaurantID);

        $this->sendJson(array('rating' => $row->rating));
    }


    public function actionRatings()
    {
        $ratings = $this->restaurantsManager->findAllRatings();
        $this->sendJson($ratings);
    }
}
