<?php
use EasyBoni\Model\UserManager;
use Nette\Application\ForbiddenRequestException;
use Nette\Security\AuthenticationException;

/**
 *
 * @author Marian Rusnak
 */
class UserPresenter extends BasePresenter
{
    /** @var UserManager @inject */
    public $userManager;


    public function actionRegister()
    {
        $post = $this->request->post;

        $email = $post['email'];
        $firstName = $post['firstName'];
        $lastName = $post['lastName'];
        $password = $post['password'];

        $this->userManager->createUser($email, $firstName, $lastName, $password);

        $this->actionLogin();
    }


    public function actionLogin()
    {
        $post = $this->request->post;

        $email = $post['email'];
        $password = $post['password'];

        try {
            $this->user->login($email, $password);
        } catch (AuthenticationException $e) {
            $this->sendJson(array('success' => false)); // exit
        }

        $this->actionInfo();
    }


    public function actionInfo()
    {
        if (!$this->user->isLoggedIn()) {
            $this->terminate(); // exit
        }

        $this->sendJson($this->user->identity->data);
    }


    public function actionLogout()
    {
        $this->user->logout();

        $this->sendJson(array('success' => true));
    }
}
