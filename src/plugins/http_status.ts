interface IHttpStatus {
   [ key: string ]: {
      status: number,
      message: string,
      message_ru: string
   }
}

const _100 = {
   _100: {
      status: 100,
      message: ':: 100 - Continue ::',
      message_ru: ':: 100 - Продолжайте ::'
   },
   _101: {
      status: 101,
      message: ':: 101 - Switching Protocol ::',
      message_ru: ':: 101 - Переключение протоколов ::'
   },
   _102: {
      status: 102,
      message: ':: 102 - Processing ::',
      message_ru: ':: 102 - Идёт обработка ::'
   },
   _103: {
      status: 103,
      message: ':: 103 - Early Hints ::',
      message_ru: ':: 103 - Ранняя метаинформация ::'
   },
}

// ======= ======= ======= =======
// ======= ======= ======= ======= 200
const _200 = {
   _ok: {
      // _200 _ok
      status: 200,
      message: ':: 200 - OK ::',
      message_ru: ':: 200 - Успешно ::'
   },
   _200: {
      // _200 _ok
      status: 200,
      message: ':: 200 - OK ::',
      message_ru: ':: 200 - Успешно ::'
   },
   _created: {
      // _201 _created
      status: 201,
      message: ':: 201 - Created ::',
      message_ru: ':: 201 - Создано ::'
   },
   _201: {
      // _201 _created
      status: 201,
      message: ':: 201 - Created ::',
      message_ru: ':: 201 - Создано ::'
   },
   // ======= ======= ======= =======
   // ======= ======= ======= =======
   _202: {
      status: 202,
      message: ':: 202 - Accepted ::',
      message_ru: ':: 202 - Принято ::'
   },
   _203: {
      status: 203,
      message: ':: 203 - Non-Authoritative Information ::',
      message_ru: ':: 203 - Информация не авторитетна ::'
   },
   _204: {
      status: 204,
      message: ':: 204 - No Content ::',
      message_ru: ':: 204 - Нет содержимого ::'
   },
   _205: {
      status: 205,
      message: ':: 205 - Reset Content ::',
      message_ru: ':: 205 - Сбросить содержимое ::'
   },
   _206: {
      status: 206,
      message: ':: 206 - Partial Content ::',
      message_ru: '::  206 -Частичное содержимое ::'
   },
   _207: {
      status: 207,
      message: ':: 207 - Multi-Status ::',
      message_ru: ':: 207 - Многостатусный ::'
   },
   _208: {
      status: 208,
      message: ':: 208 - Already Reported ::',
      message_ru: ':: 208 - Уже сообщалось ::'
   },
   _226: {
      status: 226,
      message: ':: 226 - IM Used ::',
      message_ru: ':: 226 - Использовано IM ::'
   },
}

// ======= ======= ======= =======
// ======= ======= ======= ======= 300
const _300 = {
   // ======= ======= ======= =======
   // Это кастомные коды, т.е. их нет в документации
   // ======= ======= ======= =======
   _310: {
      // _310 _redirect
      status: 310,
      message: ':: 310 - Redirect ::',
      message_ru: ':: 310 - Redirect ::'
   },
   _311: {
      // _311 _loginRedirect
      status: 311,
      message: ':: 311 - Login Redirect ::',
      message_ru: ':: 311 - Перенаправление на Login ::'
   },
   _312: {
      // _312 _refreshRedirect
      status: 312,
      message: ':: 312 - Refresh Redirect ::',
      message_ru: ':: 312 - Перенаправление на Refresh ::'
   },
   // ======= ======= ======= =======
   // ======= ======= ======= =======
   _300: {
      status: 300,
      message: ':: 300 - Multiple Choice ::',
      message_ru: ':: 300 - Множество выборов ::'
   },
   _301: {
      status: 301,
      message: ':: 301 - Moved Permanently ::',
      message_ru: ':: 301 - Перемещено навсегда ::'
   },
   _302: {
      status: 302,
      message: ':: 302 - Found / Moved Temporarily ::',
      message_ru: ':: 302 - Найдено / Перемещено временно ::'
   },
   _303: {
      status: 303,
      message: ':: 303 - See Other ::',
      message_ru: ':: 303 - Смотреть другое ::'
   },
   _304: {
      status: 304,
      message: ':: 304 - Not Modified ::',
      message_ru: ':: 304 - Не изменялось ::'
   },
   _305: {
      status: 305,
      message: ':: 305 - Use Proxy ::',
      message_ru: ':: 305 - Использовать прокси ::'
   },
   _306: {
      status: 306,
      message: ':: 306 - Switch Proxy ::',
      message_ru: ':: 306 - Сменить прокси ::'
   },
   _307: {
      status: 307,
      message: ':: 307 - Temporary Redirect ::',
      message_ru: ':: 307 - Временное перенаправление ::'
   },
   _308: {
      status: 308,
      message: ':: 308 - Permanent Redirect ::',
      message_ru: ':: 308 - Постоянное перенаправление ::'
   }
}

// ======= ======= ======= ======= 400
// ======= ======= ======= ======= ошибки клиента
let _400 = {
   _badRequest: {
      // _400 _badRequest
      status: 400,
      message: ':: 400 - Bad Request ::',
      message_ru: ':: 400 - Некорректный запрос ::'
   },
   _400: {
      // _400 _badRequest
      status: 400,
      message: ':: 400 - Bad Request ::',
      message_ru: ':: 400 - Некорректный запрос ::'
   },
   _unauthorized: {
      // _401 _unauthorized
      status: 401,
      message: ':: 401 - Unauthorized ::',
      message_ru: ':: 401 - Не авторизован ::'
   },
   _401: {
      // _401 _unauthorized
      status: 401,
      message: ':: 401 - Unauthorized ::',
      message_ru: ':: 401 - Не авторизован ::'
   },
   _not_found: {
      // _404 _not_found
      status: 404,
      message: ':: 404 - Not Found ::',
      message_ru: ':: 404 - Не найден ::'
   },
   _404: {
      // _404 _not_found
      status: 404,
      message: ':: 404 - Not Found ::',
      message_ru: ':: 404 - Не найден ::'
   },
   _forbidden: {
      // _403 _forbidden
      status: 403,
      message: ':: 403 - Forbidden ::',
      message_ru: ':: 403 - Запрещено ::'
   },
   _403: {
      // _403 _forbidden
      status: 403,
      message: ':: 403 - Forbidden ::',
      message_ru: ':: 403 - Запрещено ::'
   },
   _conflict: {
      // _409 _conflict
      status: 409,
      message: ':: 409 - Conflict ::',
      message_ru: ':: 409 - Конфликт ::'
   },
   _409: {
      // _409 _conflict
      status: 409,
      message: ':: 409 - Conflict ::',
      message_ru: ':: 409 - Конфликт ::'
   },
   _unprocessableEntity: {
      // _422 _unprocessable_entity
      status: 422,
      message: ':: 422 - Unprocessable Entity ::',
      message_ru: ':: 422 - Некорректное тело запроса ::'
   },
   _422: {
      // _422 _unprocessable_entity
      status: 422,
      message: ':: 422 - Unprocessable Entity ::',
      message_ru: ':: 422 - Некорректное тело запроса ::'
   },
   _tooManyRequests: {
      // _429 _too_many_requests
      status: 429,
      message: ':: 429 - Too Many Requests ::',
      message_ru: ':: 429 - Слишком много запросов ::'
   },
   _429: {
      // _429 _too_many_requests
      status: 429,
      message: ':: 429 - Too Many Requests ::',
      message_ru: ':: 429 - Слишком много запросов ::'
   },
   _retryWith: {
      // _449 _retry_with
      status: 449,
      message: ':: 449 - Retry With ::',
      message_ru: ':: 449 - Повторить с... ::'
   },
   _449: {
      // _449 _retry_with
      status: 449,
      message: ':: 449 - Retry With ::',
      message_ru: ':: 449 - Повторить с... ::'
   },
   // ======= ======= ======= =======
   // ======= ======= ======= =======
   _402: {
      status: 402,
      message: ':: 402 - Payment Required ::',
      message_ru: ':: 402 - Необходима оплата ::'
   },
   _405: {
      status: 405,
      message: ':: 405 - Method Not Allowed ::',
      message_ru: ':: 405 - Метод не поддерживается ::'
   },
   _406: {
      status: 406,
      message: ':: 406 - Not Acceptable ::',
      message_ru: ':: 406 - Неприемлемо ::'
   },
   _407: {
      status: 407,
      message: ':: 407 - Proxy Authentication Required ::',
      message_ru: ':: 407 - Необходима аутентификация прокси ::'
   },
   _408: {
      status: 408,
      message: ':: 408 - Request Timeout ::',
      message_ru: ':: 408 - Истекло время ожидания ::'
   },
   _410: {
      status: 410,
      message: ':: 410 - Gone ::',
      message_ru: ':: 410 - Удалён ::'
   },
   _411: {
      status: 411,
      message: ':: 411 - Length Required ::',
      message_ru: ':: 411 - Необходима длина ::'
   },
   _412: {
      status: 412,
      message: ':: 412 - Precondition Failed ::',
      message_ru: ':: 412 - Условие ложно ::'
   },
   _413: {
      status: 413,
      message: ':: 413 - Request Entity Too Large ::',
      message_ru: ':: 413 - Полезная нагрузка слишком велика ::'
   },
   _414: {
      status: 414,
      message: ':: 414 - Request-URI Too Long ::',
      message_ru: ':: 414 - URI слишком длинный ::'
   },
   _415: {
      status: 415,
      message: ':: 415 - Unsupported Media Type ::',
      message_ru: ':: 415 - Неподдерживаемый тип данных ::'
   },
   _416: {
      status: 416,
      message: ':: 416 - Requested Range Not Satisfiable ::',
      message_ru: ':: 416 - Диапазон не достижим ::'
   },
   _417: {
      status: 417,
      message: ':: 417 - Expectation Failed ::',
      message_ru: ':: 417 - Ожидание не удалось ::'
   },
   _418: {
      status: 418,
      message: ':: 418 - I’m a teapot ::',
      message_ru: ':: 418 - Я - чайник ::'
   },
   _419: {
      status: 419,
      message: ':: 419 - Authentication Timeout (not in RFC 2616) ::',
      message_ru: ':: 419 - Обычно ошибка проверки CSRF ::'
   },
   _420: {
      status: 420,
      message: ':: 420 - Enhance Your Calm (Twitter) ::',
      message_ru: ':: 420 - Подождите немного (Твиттер) ::'
   },
   _421: {
      status: 421,
      message: ':: 421 - Misdirected Request ::',
      message_ru: ':: 421 - Неверный запрос ::'
   },
   _423: {
      status: 423,
      message: ':: 423 - Locked ::',
      message_ru: ':: 423 - Заблокировано ::'
   },
   _424: {
      status: 424,
      message: ':: 424 - Failed Dependency ::',
      message_ru: ':: 424 - Невыполненная зависимость ::'
   },
   _425: {
      status: 425,
      message: ':: 425 - Too Early ::',
      message_ru: ':: 425 - Слишком рано ::'
   },
   _426: {
      status: 426,
      message: ':: 426 - Upgrade Required ::',
      message_ru: ':: 426 - Необходимо обновление ::'
   },
   _428: {
      status: 428,
      message: ':: 428 - Precondition Required ::',
      message_ru: ':: 428 - Необходимо предусловие ::'
   },
   _430: {
      status: 430,
      message: ':: 430 - Would Block ::',
      message_ru: ':: 430 - Будет заблокировано ::'
   },
   _431: {
      status: 431,
      message: ':: 431 - Request Header Fields Too Large ::',
      message_ru: ':: 431 - Поля заголовка запроса слишком большие ::'
   },
   _434: {
      status: 434,
      message: ':: 434 - Requested host unavailable ::',
      message_ru: ':: 434 - Запрашиваемый адрес недоступен ::'
   },
   _444: {
      status: 444,
      message: ':: 444 - No Response (Nginx) ::',
      message_ru: ':: 444 - Нет ответа (Nginx) ::'
   },
   _450: {
      status: 450,
      message: ':: 450 - Blocked by Windows Parental Controls (Microsoft) ::',
      message_ru: ':: 450 - Заблокировано родительским контролем Windows (Microsoft) ::'
   },
   _451: {
      status: 451,
      message: ':: 451 - Unavailable For Legal Reasons ::',
      message_ru: ':: 451 - Недоступно по юридическим причинам ::'
   },
   _499: {
      status: 499,
      message: ':: 499 - Client Closed Request ::',
      message_ru: ':: 499 - Клиент закрыл соединение ::'
   },
}

// ======= ======= ======= ======= 500
// ======= ======= ======= ======= ошибки сервера
const _500 = {
   _internalServer: {
      // _500 _internal_server
      status: 500,
      message: ':: 500 - Internal server error ::',
      message_ru: ':: 500 - Внутренняя ошибка сервера ::'
   },
   _500: {
      // _500 _internal_server
      status: 500,
      message: ':: 500 - Internal server error ::',
      message_ru: ':: 500 - Внутренняя ошибка сервера ::'
   },
   _notImplemented: {
      // _501 _not_implemented
      status: 501,
      message: ':: 501 - Not Implemented () ::',
      message_ru: ':: 501 - Не реализовано ::'
   },
   _501: {
      // _501 _not_implemented
      status: 501,
      message: ':: 501 - Not Implemented () ::',
      message_ru: ':: 501 - Не реализовано ::'
   },
   _unknownError: {
      // _520 _unknown_error
      status: 520,
      message: ':: 520 - Unknown Error ::',
      message_ru: ':: 520 - Неизвестная ошибка ::'
   },
   _520: {
      // _520 _unknown_error
      status: 520,
      message: ':: 520 - Unknown Error ::',
      message_ru: ':: 520 - Неизвестная ошибка ::'
   },
   // ======= ======= ======= =======
   // ======= ======= ======= =======
   _502: {
      status: 502,
      message: ':: 502 - Bad Gateway () ::',
      message_ru: ':: 502 - Плохой шлюз ::'
   },
   _503: {
      status: 503,
      message: ':: 503 - Service Unavailable () ::',
      message_ru: ':: 503 - Сервис недоступен ::'
   },
   _504: {
      status: 504,
      message: ':: 504 - Gateway Timeout () ::',
      message_ru: ':: 504 - Шлюз не отвечает ::'
   },
   _505: {
      status: 505,
      message: ':: 505 - HTTP Version Not Supported () ::',
      message_ru: ':: 505 - Версия HTTP не поддерживается ::'
   },
   _506: {
      status: 506,
      message: ':: 506 - Variant Also Negotiates () ::',
      message_ru: ':: 506 - Вариант тоже проводит согласование ::'
   },
   _507: {
      status: 507,
      message: ':: 507 - Insufficient Storage () ::',
      message_ru: ':: 507 - Переполнение хранилища ::'
   },
   _508: {
      status: 508,
      message: ':: 508 - Loop Detected () ::',
      message_ru: ':: 508 - Обнаружено бесконечное перенаправление ::'
   },
   _509: {
      status: 509,
      message: ':: 509 - Bandwidth Limit Exceeded () ::',
      message_ru: ':: 509 - Исчерпана пропускная ширина канала ::'
   },
   _510: {
      status: 510,
      message: ':: 510 - Not Extended ::',
      message_ru: ':: 510 - Не расширено ::'
   },
   _511: {
      status: 511,
      message: ':: 511 - Network Authentication Required ::',
      message_ru: ':: 511 - Требуется сетевая аутентификация ::'
   },
   _521: {
      status: 521,
      message: ':: 521 - Web Server Is Down ::',
      message_ru: ':: 521 - Веб-сервер не работает ::'
   },
   _522: {
      status: 522,
      message: ':: 522 - Connection Timed Out ::',
      message_ru: ':: 522 - Соединение не отвечает ::'
   },
   _523: {
      status: 523,
      message: ':: 523 - Origin Is Unreachable ::',
      message_ru: ':: 523 - Источник недоступен ::'
   },
   _524: {
      status: 524,
      message: ':: 524 - A Timeout Occurred ::',
      message_ru: ':: 524 - Время ожидания истекло ::'
   },
   _525: {
      status: 525,
      message: ':: 525 - SSL Handshake Failed ::',
      message_ru: ':: 525 - Квитирование SSL не удалось ::'
   },
   _526: {
      status: 526,
      message: ':: 526 - Invalid SSL Certificate ::',
      message_ru: ':: 526 - Недействительный сертификат SSL ::'
   },
   _527: {
      status: 527,
      message: ':: 527 - Error: Railgun Listener to origin error ::',
      message_ru: ':: 527 - Ошибка прослушивателя рейлгана для источника ::'
   },
   _530: {
      status: 530,
      message: ':: 530 - Origin DNS Error ::',
      message_ru: ':: 530 - Ошибка исходного DNS ::'
   },
   _598: {
      status: 598,
      message: ':: 598 - Network read timeout error ::',
      message_ru: ':: 598 - Ошибка тайм-аута сетевого чтения ::'
   },
   _599: {
      status: 599,
      message: ':: 599 - Network connect timeout error ::',
      message_ru: ':: 599 - Ошибка тайм-аута сетевого подключения ::',
   },
}

export const http_status = {
   ..._100,
   ..._200,
   ..._300,
   ..._400,
   ..._500
}

