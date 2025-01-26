export default {
  common: {
    grid: 'Сетка',
    list: 'Список',
    add: 'Добавить',
    added: 'Добавлено',
    more: 'Ещё',
    edit: 'Редактировать',
    clear: 'Очистить',
    update: 'Обновить',
    delete: 'Удалить',
    cancel: 'Отмена',
    save: 'Сохранить',
    nextStep: 'Далее',
    prevStep: 'Назад',
    disabled: 'Выключено',
    enabled: 'Включено',
    preview: 'Предварительный просмотр',
    warning: 'Предупреждение',
    disable: 'Выключить',
    enable: 'Включить',
    use: 'Использовать',
    none: 'Отсутствует',
    close: 'Закрыть',
    reset: 'Сбросить',
    pause: 'Приостановить',
    resume: 'Продолжить',
    details: 'Детали',
    updateAll: 'Обновить всё',
    updateTime: 'Последнее обновление',
    keywords: 'Ключевые слова',
    success: 'Успешно',
    copy: 'Скопировать',
    copied: 'Скопировано',
    auto: 'Автоматически',
    import: 'Испорт',
    install: 'Установить',
    uninstall: 'Удалить',
    run: 'Запустить',
    refresh: 'Обновить',
    confirm: 'Подтвердить',
    selectAll: 'Выбрать всё',
    http: 'Удалённый',
    file: 'Локальный',
    openFile: 'Открыть файл',
    develop: 'Разработать',
    canceled: 'Отменено',
    downloading: 'Скачивание...',
  },
  kernel: {
    rule: 'По правилам',
    global: 'Глобально',
    direct: 'Напрямую',
		ruleDesc: 'Маршрутизация трафика на основе правил',
    globalDesc: 'Следовать только за глобальной группой',
		directDesc: 'Направлять весь трафик напрямую',
    log: {
      disabled: 'Выключено',
      level: 'Уровень',
			output: 'Выходные данные',
			timestamp: 'Временная метка',
      trace: 'trace',
      debug: 'debug',
      info: 'info',
      warn: 'warn',
      error: 'error',
      fatal: 'fatal',
      panic: 'panic',
    },
    clash_api: {
      external_controller: 'Внешний контроллер',
			external_ui: 'Внешний пользовательский интерфейс',
			external_ui_download_url: 'URL загрузки веб-интерфейса',
			external_ui_download_detour: 'Обходной путь загрузки веб-интерфейса',
			secret: 'Секрет REST API',
      default_mode: 'Режим работы',
			access_control_allow_origin: 'Допустимые источники CORS',
			access_control_allow_private_network: 'Разрешить доступ из частной сети',
    },
    cache_file: {
      enabled: 'Включен',
			path: 'Путь к файлу кэша',
			cache_id: 'Идентификатор в файле кэша',
			store_fakeip: 'Сохранять поддельный IP-адрес',
			store_rdrc: 'Сохранять отклоненный ответ DNS',
			rdrc_timeout: 'Тайм-аут кэша отклоненных ответов DNS',
    },
    inbounds: {
      enable: 'Включен',
      tag: 'Тег',
      users: 'Пользователи Http/Socks',
      listen: {
        listen: 'IP-адрес для прослушивания',
        listen_port: 'Порт',
        tcp_fast_open: 'TCP Fast Open',
        tcp_multi_path: 'TCP Multi Path',
        udp_fragment: 'Фрагментация UDP',
      },
      tun: {
        interface_name: 'Имя интерфейса',
				address: 'Префикс IPv4 и IPv6',
        mtu: 'MTU',
        auto_route: 'Автоматическая маршрутизация',
        strict_route: 'Строгая маршрутизация',
        route_address: 'Адрес маршрутизации',
				endpoint_independent_nat: 'Независимый от конечной точки NAT',
        stack: 'Реализация TUN',
        system: 'System',
        gvisor: 'gVisor',
        mixed: 'Mixed',
      },
      mixedPort: 'Смешанный порт',
      httpPort: 'Порт HTTP(s)',
      socksPort: 'Порт SOCKS5',
    },
    outbounds: {
			name: 'Исходящий трафик',
			tag: 'Тег',
      type: 'Тип',
      url: 'URL-адрес',
      interval: 'Интервал (мин.)',
      tolerance: 'Допустимая задержка (мс.)',
			interrupt_exist_connections: 'Прерывать существующие соединения',
      direct: 'Напрямую',
      directDesc: 'Без настроек',
      selector: 'Селектор',
      urltest: 'Тест подключения',
			notFound: 'Отсутствуют некоторые исходящие теги или прокси-серверы. Пожалуйста, исправьте их.',
			needToAdd: 'Ссылайтесь хотя бы на один исходящий тег или прокси-сервер.',
			refsSubscription: 'Справочная подписка',
      refsOutbound: 'Справочное исходящее соединение',
			sort: 'Просмотр и сортировка',
			refs: 'Справочная подписка и исходящие сообщения',
      noSubs: 'Список подписок пуст.',
      empty: 'Нет доступных прокси по этой подпсиске',
      builtIn: 'Встроенные',
      subscriptions: 'Подписки',
      include: 'Содержать',
      exclude: 'Исключать',
    },
    route: {
      tab: {
        common: 'Общее',
        rules: 'Правила',
				rule_set: 'Набор правил',
      },
      find_process: 'Найти процесс',
      auto_detect_interface: 'Автоматическое обнаружение интерфейса',
			default_interface: 'Интерфейс по-умолчанию',
			final: 'Конечный исходящий тег',
      rule_set: {
        type: {
          name: 'Имя',
          inline: 'Встроенный',
          local: 'Локальный',
          remote: 'Удалённый',
        },
        tag: 'Тег',
        format: {
          name: 'Формат',
					binary: 'Двоичный',
          source: 'Источник',
        },
				url: 'URL-адрес',
        download_detour: 'Обход скачивания',
        update_interval: 'Интервал обновления',
        path: 'Путь',
				notFound: 'Набор правил был утерян.',
				empty: 'Список наборов правил пуст.',
      },
      rules: {
        type: 'Тип',
        action: {
          name: 'Действие',
          route: 'Маршрут',
					'route-options': 'Варианты маршрута',
					reject: 'Отклонять',
					'hijack-dns': 'Перехват DNS',
          sniff: 'Подслушивать',
					resolve: 'Разрешить работу DNS',
          rejectMethod: 'Метод',
          rejectDefault: 'NXDOMAIN',
          rejectDrop: 'Сбросить',
        },
        outbound: 'Тег исходящего подключения',
        routeOptions: 'Варианты маршрута',
        sniffer: {
          name: 'Перехватчик',
          http: 'http',
          tls: 'tls',
          quic: 'quic',
          dns: 'dns',
          ssh: 'ssh',
          rdp: 'rdp',
        },
        server: 'DNS сервер',
				payload: 'Полезная нагрузка',
				notFound: 'Отсутствует тег исходящего соединения.',
				invalid: 'Недопустимый параметр',
				invert: 'Инвертировать',
      },
    },
    rules: {
      type: {
        name: 'Тип',
        inbound: 'inbound',
        network: 'network',
        protocol: 'protocol',
        domain: 'domain',
        domain_suffix: 'domain_suffix',
        domain_keyword: 'domain_keyword',
        domain_regex: 'domain_regex',
        source_ip_cidr: 'source_ip_cidr',
        ip_cidr: 'ip_cidr',
        ip_is_private: 'ip_is_private',
        source_port: 'source_port',
        source_port_range: 'source_port_range',
        port: 'port',
        port_range: 'port_range',
        process_name: 'process_name',
        process_path: 'process_path',
        process_path_regex: 'process_path_regex',
        clash_mode: 'clash_mode',
        rule_set: 'rule_set',
        outbound: 'outbound',
				inline: 'Встроенный',
      },
    },
    strategy: {
      name: 'Стратегия',
      default: 'По-умолчанию',
			byDnsRules: 'Определяется правилами DNS',
      prefer_ipv4: 'IPv4 предпочтительно',
			prefer_ipv6: 'IPv6 предпочтительно',
			ipv4_only: 'IPv4 исключительно',
			ipv6_only: 'IPv6 исключительно',
    },
    dns: {
      tab: {
        common: 'Общее',
        servers: 'Серверы',
        rules: 'Правила',
      },
      tag: 'Тег',
      address: 'Адрес',
			client_subnet: 'Клиентская подсеть',
			address_resolver: 'Преобразователь адресов',
      detour: 'Обход',
			disable_cache: 'Отключить кэш',
			disable_expire: 'Отключить истечение срока действия',
			independent_cache: 'Независимый кэш',
      final: 'Конечный DNS',
      strategy: 'Стратегия',
      fakeip: {
				name: 'Поддельный IP-адрес',
				inet4_range: 'Диапазон поддельных IP-адресов (IPv4)',
				inet6_range: 'Диапазон поддельных IP-адресов (IPv6)',
        addServer: 'Добавить DNS сервер поддельного IP-адреса',
				addRules: 'Добавить правила DNS поддельного IP-адреса',
      },
      rules: {
        type: 'Тип',
				payload: 'Полезная нагрузка',
        action: 'Действие',
        server: 'Сервер',
      },
    },
    mode: 'Режим',
		'allow-lan': 'Разрешить доступ к локальной сети',
		'disallow-lan': 'Запретить доступ к локальной сети',
		notFound: 'Ядро не найдено',
  },
  router: {
    overview: 'Обзор',
    subscriptions: 'Подписки',
    rulesets: 'Наборы правил',
    plugins: 'Плагины',
    settings: 'Настройки',
    debug: 'Дебаг',
    components: 'Компоненты',
    about: 'О программе',
    profiles: 'Профили',
    kernel: 'Ядро',
    scheduledtasks: 'Задачи',
  },
  home: {
    mode: 'Режим прокси-сервера',
    global: 'Глобальный',
    rule: 'По правилам',
    direct: 'Напрямую',
    quickStart: 'Быстрый старт',
		noProfile: 'Добро пожаловать в {0}, нажмите на кнопку, чтобы начать.',
		initSuccessful: 'Инициализация прошла успешно',
		initFailed: 'Не удалось обновить подписку, вам необходимо обновить подписку вручную',
    overview: {
      expandAll: 'Развернуть все',
      collapseAll: 'Свернуть все',
      refresh: 'Обновить',
      delayTest: 'Тест задержки',
      stop: 'Остановить ядро',
      restart: 'Перезапустить ядро',
			viewlog: 'Показать журнал',
      start: 'Нажмите, чтобы начать',
			noLogs: 'Журналы пусты',
      systemProxy: 'Системный прокси',
      tunMode: 'Режим TUN',
			traffic: 'Трафик',
      realtimeTraffic: 'Текущий трафик',
      totalTraffic: 'Общий трафик',
      connections: 'Подключения',
      memory: 'Использование памяти',
      transmit: 'Передача',
      receive: 'Приём',
      settings: 'Настройки ядра',
			settingsTips: 'Вступает в силу временно. Для постоянных изменений, пожалуйста, измените настройки `профиля`.',
      updateGEO: 'Обновить геоданные',
			needPort: 'Пожалуйста, сначала установите порт прокси-сервера',
			needTun: 'Пожалуйста, сначала добавьте входящее подключение TUN',
    },
    controller: {
			name: 'Контроллер',
			autoClose: 'Автоматическое закрытие',
      unAvailable: 'Показывать недоступные',
      cardMode: 'Режим карточек',
      sortBy: 'Сортировка по задержке',
			delay: 'URL-адрес для проверки задержки',
			delayUrl: 'Пожалуйста, введите URL-адрес для проверки задержки',
    },
    connections: {
      type: 'Тип',
      process: 'Процесс',
      processPath: 'Путь до процесса',
      sniffHost: 'Подслушивать хост',
      sourceIP: 'Исходный IP',
      remoteDestination: 'Назначение',
      host: 'Хост',
      inbound: 'Входящее подключение',
      rule: 'Правило',
      chains: 'Цепочки',
      upload: 'Загрузка',
      download: 'Скачивание',
      uploadSpeed: 'Скорость загрузки',
      downSpeed: 'Скорость скачивания',
      time: 'Время',
      close: 'Закрыть',
      addToDirect: 'Добавить к DIRECT',
      addToProxy: 'Добавить к PROXY',
      addToReject: 'Добавить к REJECT',
      active: 'Активные',
      closed: 'Закрытые',
      closeAll: 'Закрыть все подключения',
			sort: 'Сортировка и настройка видимости',
			details: 'Сведения о подключении',
    },
  },
  subscribe: {
    manual: 'Вручную',
    name: 'Имя',
		url: 'Удаленный URL-адрес',
    localPath: 'Локальный путь',
		website: 'Веб-сайт',
    path: 'Путь сохранения',
		include: 'Содержать ключевые слова',
		exclude: 'Исключать ключевые слова',
		includeProtocol: 'Содержать протокол',
		excludeProtocol: 'Исключать протокол',
		proxyPrefix: 'Префикс прокси-сервера',
    updating: 'Загрузка',
    useragent: 'Пользовательский User-Agent',
    resetUserAgent: 'Сбросить User-Agent',
		inSecure: 'Пропустить проверку TLS',
    healthCheck: {
			name: 'Проверка работоспособности',
      interval: 'интервал (сек.)',
      url: 'ссылка',
    },
  },
  subscribes: {
    download: 'Скачано',
    upload: 'Загружено',
    total: 'Всего',
    expire: 'Истекает',
    subtype: 'Тип подписки',
    website: 'Веб-сайт',
    empty: 'Список подписок пуст. Сперва нужно{action}подписку.',
		enterLink: 'Введите ссылку для подписки',
		proxyCount: 'Количество прокси-серверов',
		editProxies: 'Редактировать прокси-сервера',
		editSourceFile: 'Редактировать прокси-сервера (источник)',
    copySub: 'Скопировать ссылку',
    proxies: {
      type: 'Протокол',
      name: 'Имя',
      add: 'Добавить прокси',
    },
  },
  profile: {
    name: 'Имя',
		generalSettings: 'Общие настройки',
		advancedSettings: 'Расширенные настройки',
    step: {
      name: 'Имя',
      general: 'Общее',
      inbounds: 'Вх. соединения',
      outbounds: 'Исходящие подключения',
      route: 'Маршрут',
      dns: 'DNS',
			'mixin-script': 'Микширование и сценарий',
    },
		proxies: 'Справочные прокси-серверы',
    use: 'Справочные подписки',
		noSubs: 'Доступных подписок нет.',
		group: 'Сведения о группе',
    rule: 'Сведения о правилах',
		auto: 'Эта конфигурация управляется вашей подпиской и будет перезаписана при обновлении!\nИспользуйте систему плагинов для внесения постоянных изменений.',
    mixinSettings: {
      name: 'Микширование',
      priority: 'Приоритет',
			mixin: 'Микширование',
			gui: 'Графический интерфейс пользователя',
    },
    scriptSettings: {
      name: 'Сценарий',
    },
  },
  profiles: {
    shouldStop: 'Невозможно удалить, т.к. профиль используется.',
    empty: 'Список профилей пуст. Сперва нужно{action}профиль.',
		copytoClipboard: 'Сгенерировать конфигурацию в буфер обмена',
		generateAndView: 'Сгенерировать и посмотреть конфигурацию',
		copy: 'Скопировать и вставить',
		start: 'Запуск/перезагрузка с этим профилем',
    inbounds: 'Вх. соединения',
    outbounds: 'Исх. соединения',
    dnsServers: 'DNS серверы',
    dnsRules: 'DNS правила',
  },
  ruleset: {
    manual: 'Вручную',
    format: {
      name: 'Формат',
      source: 'Источник',
      binary: 'Бинарный',
    },
    rulesetType: 'Тип набора правил',
    name: 'Имя',
		url: 'Удаленный URL-адрес',
    path: 'Путь сохранения',
    interval: 'Интервал',
    updating: 'Обновление',
  },
  rulesets: {
    hub: 'Центр плагинов',
		total: 'Количество наборов правил',
		noDesc: 'Нет описания',
		updating: 'Обновление',
    fetching: 'Получение...',
		empty: 'Список наборов правил пуст. Сначала{action}или испортируйте из{import}.',
		rulesetCount: 'Количество наборов правил',
		editRuleset: 'Редактировать правила',
		selectRuleType: 'Выбрать тип правила',
  },
  plugin: {
    trigger: 'Триггер',
    'on::manual': 'on::manual',
    'on::startup': 'on::startup',
    'on::shutdown': 'on::shutdown',
    'on::generate': 'on::generate',
    'on::subscribe': 'on::subscribe',
    'on::ready': 'on::ready',
    'on::task': 'on::task',
    'on::install': 'on::install',
    'on::uninstall': 'on::uninstall',
    'on::configure': 'on::configure',
    name: 'Имя',
    description: 'Описание',
		url: 'Удаленный URL-адрес',
		install: 'Требуется установка',
    installed: 'Установлено',
    path: 'Путь сохранения',
    type: 'Тип',
    menus: 'Меню',
    configuration: 'Конфигурация',
		menuKey: 'Название меню',
		menuValue: 'Название триггерной функции',
		selectComponent: 'Выберите компонент',
    confName: 'Имя',
    confDescription: 'Описание',
    confKey: 'Ключ',
    confDefault: 'По-умолчанию',
    options: 'Варианты',
		restore: 'Сброс к значению по-умолчанию',
  },
  plugins: {
    updating: 'Обновление',
    empty: 'Список плагинов. Сперва{action}или импортируйте из{import}.',
    source: 'Источник',
    reload: 'Перезагрузить',
    configuration: 'Настроить',
    hub: 'Центр плагинов',
    update: 'Обновить список',
    updateSuccess: 'Успешно обновлено',
    total: 'Число плагинов',
		removeConfiguration: 'Вы хотите удалить конфигурацию плагина?',
    testRun: 'Тестовый запуск',
  },
  scheduledtask: {
    name: 'Имя',
    type: 'Тип',
    script: 'Сценарий',
    subscriptions: 'Подписки',
    rulesets: 'Наборы правил',
    plugins: 'Плагины',
    cron: 'Cron',
    notification: 'Уведомление о завершённой задаче',
    cronTips: 'Секунды Минуты Часы "День месяца" Месяц "День недели"',
    lastTime: 'Время последнего выполнения',
    'update::subscription': 'update::subscription',
    'update::ruleset': 'update::ruleset',
    'update::plugin': 'update::plugin',
    'run::plugin': 'run::plugin',
    'run::script': 'run::script',
  },
  scheduledtasks: {
    logs: 'Журналы',
    name: 'Плагин',
    duration: 'Длительность',
    startTime: 'Время начала',
    endTime: 'Время конца',
    time: 'Время',
    result: 'Результат',
		empty: 'Список запланированных задач пуст. Сперва{action}запланированную задачу.',
    run: 'Запустить сейчас',
    log: 'Показать журнал',
  },
  settings: {
    general: 'Общее',
    theme: {
      name: 'Тема',
      light: 'Светлая',
      dark: 'Тёмная',
      auto: 'Системная',
    },
    color: {
      name: 'Цвет',
      default: 'По-умолчанию',
      orange: 'Оранжевый',
      pink: 'Розовый',
      red: 'Красный',
			skyblue: 'Небесный',
      green: 'Зелёный',
      purple: 'Фиолетовый',
    },
    fontFamily: 'Шрифт',
    resetFont: 'Сбросить шрифт',
    appFolder: {
      name: 'Папка приложения',
      open: 'Открыть папку приложения',
    },
    kernelCache: {
      name: 'Кэш ядра',
      clear: 'Очистить кэш ядра',
    },
    lang: {
      name: 'Language',
      zh: '简体中文',
      en: 'English',
			ru: 'Русский'
    },
    pages: {
			name: 'Видимость страницы',
    },
    windowState: {
      normal: 'Окно',
      maximised: 'Окно на весь экран',
      minimised: 'Свёрнуто',
      fullscreen: 'На весь экран',
    },
    webviewGpuPolicy: {
			name: 'Политика Webview Gpu',
      always: 'Всегда',
      onDemand: 'По требованию',
      never: 'Никогда',
    },
    needRestart: 'Необходим перезапуск',
    needAdmin: 'Необходим запуск от имени администратора',
    exitOnClose: 'Выйти из приложения при закрытии окна',
    closeKernelOnExit: 'Остановить ядро при закрытии приложения',
    autoSetSystemProxy: 'Автоматическая установка/очистка системного прокси',
    autoStartKernel: 'Автоматический запуск ядра',
    admin: 'Запускать от имени администратора',
    addToMenu: 'Добавить плагин в меню',
		multipleInstance: 'Разрешить несколько экземпляров приложения',
		rollingRelease: 'Включить потоковые обновления',
    startup: {
			name: 'Запускать при входе в систему',
      delay: 'Задержка (сек.)',
    },
    kernel: {
      name: 'sing-box',
      version: 'Переключение версий',
      stable: 'Стабильная',
      alpha: 'Альфа',
			grant: 'Предоставлить права',
      local: 'Локальная версия',
      remote: 'Удаленная версия',
      update: 'Обновить',
      restart: 'Перезапустить ядро',
    },
    userAgent: {
      name: 'Пользовательский User-Agent',
      reset: 'Сбросить User-Agent',
    },
    githubapi: {
      name: 'Авторизация в REST API',
			tips: 'Обеспечивает более высокий лимит скорости',
    },
  },
  about: {
    new: 'Новая версия',
    restart: 'Перезапустить приложение',
		noDownloadLink: 'Ссылка для скачивания не найдена',
		updateSuccessfulRestart: 'Обновление завершено, пожалуйста, перезапустите приложение',
		updateSuccessfulReplace: 'Загрузка завершена, пожалуйста, замените приложение вручную',
		updateSuccessful: 'Обновление завершено',
		newVersion: 'Найдена новая версия',
		latestVersion: 'Уже установлена последняя версия',
  },
  titlebar: {
    resetSize: 'Сбросить размер окна',
    reload: 'Перезагрузить окно',
    restart: 'Перезапустить приложение',
    exitApp: 'Выйти из приложения',
		waiting: 'Ожидание завершения работы программы...',
		timeout: 'Время выхода истекло. Принудительный выход?\n\nПричина: время выхода плагина истекло.',
  },
  outbound: {
    select: '🚀 Выбор прокси-сервера',
		urltest: '🎈 Автоматический выбор',
    direct: '🎯 Прямое подключение',
    block: '🛑 Блокировка подключений',
		fallback: '🐟 Запасной вариант',
  },
  tray: {
    showMainWindow: 'Показать главное окно',
    restart: 'Перезапуск',
    restartTip: 'Перезапустить приложение',
    exit: 'Выход',
    exitTip: 'Выйти из приложения',
    proxyGroup: 'Группа прокси',
    setSystemProxy: 'Установить системный прокси',
		clearSystemProxy: 'Очистить системный прокси',
    tun: 'Режим TUN',
    enableTunMode: 'Включить режим TUN',
    disableTunMode: 'Выключить режим TUN',
    kernel: 'Ядро',
    proxy: 'Системный прокси',
    startKernel: 'Запустить ядро',
    stopKernel: 'Остановить ядро',
    restartKernel: 'Перезапустить ядро',
    plugins: 'Плагины',
  },
  commands: {
		noMatching: 'Нет совпадающих команд',
  },
}
