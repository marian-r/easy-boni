<?php

use Nette\Application\Routers\Route;
use Nette\Configurator;

require __DIR__ . '/../../vendor/autoload.php';

$configurator = new Configurator;

//$configurator->setDebugMode(false);
$configurator->enableDebugger(__DIR__ . '/../log');

$configurator->setTempDirectory(__DIR__ . '/../temp');
$configurator->createRobotLoader()
    ->addDirectory(__DIR__)
    ->register();

$configurator->addConfig(__DIR__ . '/config/config.neon');

$container = $configurator->createContainer();

$container->router[] = new Route('<presenter>/<action>[/<id>]');

return $container;
