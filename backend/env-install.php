<?php

use Nette\Neon\Neon;

require __DIR__ . '/../vendor/autoload.php';

echo 'Checking credentials file' . PHP_EOL;

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

    var_dump($credentials);
    echo PHP_EOL;

    file_put_contents($credentialsConfig, Neon::encode($credentials));

    echo 'Credentials file successfully written' . PHP_EOL;
}

