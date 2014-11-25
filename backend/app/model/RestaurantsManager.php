<?php
namespace EasyBoni\Model;

use Nette\Database\Table\IRow;

/**
 *
 * @author Marian Rusnak
 */
class RestaurantsManager extends BaseManager
{
    public function addRating($restaurantID, $userID, $value)
    {
        $result = $this->db->table('ratings')
            ->insert(array(
                'restaurant_id' => $restaurantID,
                'user_id' => $userID,
                'value' => $value
            ));
        return $result === 1;
    }


    public function addComment($restaurantID, $userID, $text)
    {
        $result = $this->db->table('comments')
            ->insert(array(
                'restaurant_id' => $restaurantID,
                'user_id' => $userID,
                'text' => $text
            ));
        return $result === 1;
    }


    /**
     * @return array|IRow[]
     */
    public function findAllRatings()
    {
        return $this->db->table('ratings')
            ->select('restaurant_id, AVG(value) AS rating')
            ->group('restaurant_id')
            ->fetchPairs('restaurant_id', 'rating');
    }


    /**
     * @param int $restaurantID
     * @return IRow|null
     */
    public function findRatingByID($restaurantID)
    {
        $row = $this->db->table('ratings')
            ->select('restaurant_id, AVG(value) AS rating')
            ->where(array('restaurant_id' => $restaurantID))
            ->group('restaurant_id')
            ->fetch();
        return $row ?: null;
    }


    /**
     * @param int $restaurantID
     * @return array
     */
    public function findCommentsByID($restaurantID)
    {
        $comments = $this->db->table('comments')
            ->where(array('restaurant_id' => $restaurantID))
            ->order('timestamp DESC');

        $array = array();
        foreach ($comments as $comment) {
            $commentItem = $comment->toArray();
            $commentItem['user'] = $comment->user->first_name . ' ' . $comment->user->last_name;
            $array[] = $commentItem;
        }

        return $array;
    }
}
