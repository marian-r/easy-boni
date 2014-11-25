<?php

namespace EasyBoni\Model;

use Nette\Database\Table\ActiveRow;
use Nette\Security\Passwords;

/**
 *
 * @author Marian Rusnak
 */
class UserManager extends BaseManager
{
    /**
     * @param string $email
     * @param string $firstName
     * @param string $lastName
     * @param string $password
     * @return ActiveRow|null
     */
    public function createUser($email, $firstName, $lastName, $password)
    {
        $newUser = $this->db->table('users')
                ->insert(array(
                    'email' => $email,
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'password' => Passwords::hash($password)
                ));

        return $newUser ?: NULL;
    }


    public function findByEmail($email)
    {
        $row = $this->db->table('users')
                ->where(array('email' => $email))
                ->fetch();

        return $row ?: NULL;
    }
}
