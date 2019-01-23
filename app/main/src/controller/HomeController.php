<?php

namespace Main\Controller;

use Framework\ApplicationError;
use Framework\Controller;
use Framework\ErrorType;
use Framework\Logger;
use Framework\LogLevel;
use Framework\View;
use Symfony\Component\HttpFoundation\Request;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        try {
            $view = new View('main/home/index', []);
            return $view->render();
        } catch (\Throwable $t) {
            Logger::log("Erro", LogLevel::ERROR);
            return ApplicationError::showError($t, ErrorType::ERROR);
        }
    }
}