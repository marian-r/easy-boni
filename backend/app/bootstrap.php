<?php

use Nette\Application\Routers\Route;
use Nette\Configurator;
use Nette\Neon\Neon;

require __DIR__ . '/../../vendor/autoload.php';

$configurator = new Configurator;

//$configurator->setDebugMode(false);
$configurator->enableDebugger(__DIR__ . '/../log');

$configurator->setTempDirectory(__DIR__ . '/../temp');
$configurator->createRobotLoader()
    ->addDirectory(__DIR__)
    ->register();

$configurator->addConfig(__DIR__ . '/config/config.neon');

$credentialsConfig = __DIR__ . '/config/credentials.neon';
if (!file_exists($credentialsConfig)) {
    $credentials = array(
        'parameters' => array(
            'database' => array(
                'dsn' => $_ENV['DATABASE_DSN'],
                'user' => $_ENV['DATABASE_USER'],
                'password' => $_ENV['DATABASE_PASSWORD']
            )
        )
    );

    file_put_contents($credentialsConfig, Neon::encode($credentials));
}

$configurator->addConfig($credentialsConfig);

$container = $configurator->createContainer();

$container->router[] = new Route('<presenter>/<action>[/<id>]');

return $container;
