export default {
  common: {
    grid: 'Grid',
    list: 'List',
    add: 'Add',
    added: 'Added',
    more: 'More',
    edit: 'Edit',
    clear: 'Clear',
    update: 'Update',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    nextStep: 'Next',
    prevStep: 'Prev',
    disabled: 'Disabled',
    enabled: 'Enabled',
    preview: 'Preview',
    warning: 'Warning',
    disable: 'Disable',
    enable: 'Enable',
    use: 'Use',
    none: 'none',
    close: 'Close',
    reset: 'Reset',
    pause: 'Pause',
    resume: 'Resume',
    details: 'Details',
    updateAll: 'Update All',
    updateTime: 'Update Time',
    keywords: 'Keywords',
    success: 'Success',
    copy: 'Copy',
    copied: 'Copied',
    auto: 'Auto',
    import: 'Import',
    install: 'Install',
    uninstall: 'Uninstall',
    run: 'Run',
    refresh: 'Refresh',
    confirm: 'Confirm',
    selectAll: 'Select All',
    http: 'Remote',
    file: 'Local',
    openFile: 'Open File'
  },
  kernel: {
    port: 'HTTP(s) Port',
    mode: 'Mode',
    ipv6: 'IPv6',
    secret: 'RESTful API Secret',
    'socks-port': 'SOCKS5 Port',
    'mixed-port': 'Mixed Port',
    'allow-lan': 'Allow Lan',
    'log-level': 'Log Level',
    'external-controller': 'External Controller',
    'external-ui': 'External UI',
    'interface-name': 'Interface Name',
    auto: 'Auto',
    info: 'Info',
    warning: 'Warning',
    error: 'Error',
    debug: 'Debug',
    silent: 'Silent',
    rule: 'Rule',
    global: 'Global',
    direct: 'Direct',
    ruleDesp: 'Route traffic based on rules',
    globalDesp: 'Only follow the Global group',
    directDesp: 'Directly connect all traffic',
    'keep-alive-interval': 'Keep Alive Interval',
    'find-process-mode': 'Find Process Mode',
    'external-controller-tls': 'External Controller Tls',
    'external-ui-name': 'External UI Name',
    'external-ui-url': 'External UI URL',
    'unified-delay': 'unified-delay',
    'tcp-fast-open': 'TCP Fast Open',
    domain_strategy: 'Domain Strategy',
    'tcp-multi-path': 'TCP Multi Path',
    'udp-fragment': 'UDP Fragment',
    sniff: 'Sniff',
    'sniff-override-destination': 'Sniff Override Destination',
    authentication: 'Http/Socks Auth',
    'skip-auth-prefixes': 'Skip Auth Prefixes',
    'store-cache': 'Store cache',
    'store-fake-ip': 'Store Fake-IP',
    'geo-auto-update': 'GEO Auto Update',
    'geo-update-interval': 'GEO Update Interval',
    'lan-allowed-ips': 'LAN Allowed IPs',
    'lan-disallowed-ips': 'LAN Disallowed IPs',
    tun: {
      enable: 'Enable',
      stack: 'Stack',
      interface_name: 'Interface Name',
      'auto-route': 'Auto Route',
      'auto-detect-interface': 'Auto Detect Interface',
      'dns-hijack': 'DNS Hijack',
      'strict-route': 'Strict Route',
      mtu: 'MTU',
      'endpoint-independent-nat': 'Endpoint Independent NAT',
      'inet4-address': 'IPV4 Prefix',
      'inet6-address': 'IPV6 Prefix',
      system: 'System',
      gvisor: 'gVisor',
      mixed: 'Mixed',
      lwip: 'LWIP'
    },
    dns: {
      enable: 'Enable',
      'fake-ip-range-v4': 'Fake-IP Range(IPV4)',
      'fake-ip-range-v6': 'Fake-IP Range(IPV6)',
      'fake-ip-filter': 'Fake-IP Exclude',
      'fake-ip': 'Fake-IP',
      'local-dns': 'Local DNS',
      'remote-dns': 'Remote DNS',
      'resolver-dns': 'Resolver DNS',
      'remote-resolver-dns': 'Remote Resolver DNS',
      'remote-dns-detour': 'Remote DNS Detour',
      'final-dns': 'Fallback DNS',
      'fakeip-dns': 'Fake-IP DNS',
      block: 'BLOCK',
      default: 'Default',
      strategy: {
        name: 'Strategy',
        default: 'Default',
        prefer_ipv4: 'Prefer IPV4',
        prefer_ipv6: 'Prefer IPV6',
        ipv4_only: 'IPV4 Only',
        ipv6_only: 'IPV6 Only'
      }
    },
    tls: {
      certificate: 'certificate',
      'private-key': 'private-key'
    },
    'global-client-fingerprint': 'global-client-fingerprint',
    tracing: 'Tracing',
    'sniff-tls-sni': 'Sniff TLS SNI',
    'redirect-to-tun': 'eBPF Redirect to TUN',
    proxyGroups: {
      name: 'Name',
      lazy: 'Lazy',
      'disable-udp': 'Disable UDP',
      interval: 'Interval',
      tolerance: 'Tolerance',
      url: 'URL',
      filter: 'Filter',
      notFound: 'Some subscriptions or proxies are missing, please clean them up',
      needToAdd: 'References at least one proxy or subscription',
      sort: 'View and Sort',
      builtIn: 'Built-In',
      subscriptions: 'Subscriptions',
      type: {
        name: 'Type',
        select: 'select',
        'url-test': 'url-test',
        fallback: 'fallback',
        relay: 'relay',
        'load-balance': 'load-balance',
        Selector: 'Selector',
        UrlTest: 'UrlTest',
        Fallback: 'Fallback',
        Relay: 'Relay',
        LoadBalance: 'LoadBalance'
      },
      strategy: {
        name: 'Strategy',
        'consistent-hashing': 'consistent-hashing',
        'round-robin': 'round-robin'
      },
      empty: 'The subscription group is empty'
    },
    rules: {
      payload: 'Payload',
      proxy: 'Proxy',
      invert: 'Invert',
      ruleset: 'RuleSet',
      rulesets: 'RuleSets',
      'download-detour': 'Download Detour',
      'disable-cache': 'Disable Cache',
      name: 'Name',
      needGeodataMode: 'Please enable the "geodata-mode" option in the advanced settings',
      notFound: 'proxy group does not exist',
      inlineRuleError: 'error syntax',
      empty: 'Ruleset list is empty',
      type: {
        name: 'Type',
        DOMAIN: 'DOMAIN',
        GEOIP: 'GEOIP',
        GEOSITE: 'GEOSITE',
        IPSET: 'IPSET',
        FALLBACK: 'FALLBACK',
        'DOMAIN-SUFFIX': 'DOMAIN-SUFFIX',
        'DOMAIN-KEYWORD': 'DOMAIN-KEYWORD',
        'DOMAIN-REGEX': 'DOMAIN-REGEX',
        'IP-CIDR': 'IP-CIDR',
        'IP-CIDR6': 'IP-CIDR6',
        'SRC-PORT': 'SRC-PORT',
        'DST-PORT': 'DST-PORT',
        'PROCESS-NAME': 'PROCESS-NAME',
        'PROCESS-PATH': 'PROCESS-PATH',
        'RULE-SET': 'RULE-SET',
        'REMOTE-RULE-SET': 'REMOTE-RULE-SET',
        PROTOCOL: 'PROTOCOL',
        'IP-PRIVATE': 'IP-PRIVATE',
        'SRC-IP-PRIVATE': 'IP-PRIVATE',
        'SRC-IP-CIDR': 'SRC-IP-CIDR',
        'CLASH-MODE': 'CLASH-MODE',
        NETWORK: 'NETWORK',
        'IP-VERSION': 'IP-VERSION',
        'QUERY-TYPE': 'QUERY-TYPE',
        INBOUND: 'INBOUND',
        OUTBOUND: 'OUTBOUND',
        'FAKE-IP': 'FAKE-IP',
        INLINE: 'INLINE'
      }
    },
    name: 'sing-box',
    standard: 'Standard',
    memconservative: 'Memconservative',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    iOS: 'IOS',
    android: 'Android',
    edge: 'Edge',
    '360': '360',
    qq: 'QQ',
    random: 'Random',
    always: 'Always',
    strict: 'Strict',
    off: 'Off',
    notFound: 'Kernel Not Found',
    requestFailed: 'Request Failed',
    local: 'Local',
    remote: 'Remote',
    update: 'Update',
    restart: 'Restart Kernel'
  },
  router: {
    overview: 'OverView',
    subscriptions: 'Subscriptions',
    rulesets: 'Rulesets',
    plugins: 'Plugins',
    settings: 'Settings',
    debug: 'Debug',
    components: 'Components',
    subconverter: 'SubConverter',
    about: 'About',
    profiles: 'Profiles',
    kernel: 'Kernel',
    scheduledtasks: 'ScheduledTasks'
  },
  home: {
    mode: 'Proxy Mode',
    global: 'Global',
    rule: 'Rule',
    direct: 'Direct',
    quickStart: 'Quick Start',
    noProfile: 'Welcome to the {0}, click the button to get started.',
    initSuccessful: 'Initialization successful',
    initFailed: 'Failed to update the subscription, you need to manually update the subscription',
    overview: {
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      refresh: 'Refresh',
      delayTest: 'Delay Test',
      stop: 'Stop Kernel',
      restart: 'Restart Kernel',
      viewlog: 'view log',
      start: 'Click to Start',
      noLogs: 'Log is empty',
      systemProxy: 'System Proxy',
      tunMode: 'TUN Mode',
      traffic: 'Traffic',
      realtimeTraffic: 'Real-time Traffic',
      totalTraffic: 'Total Traffic',
      connections: 'Connections',
      memory: 'Memory',
      transmit: 'Transmit',
      receive: 'Receive',
      settings: 'Kernel Settings',
      settingsTips: 'Effective temporarily, for persistence, please modify the `profile` settings.',
      updateGEO: 'Update GEO',
      notSupportSocks: 'System does not support SOCKS proxy',
      needPort: 'Please set the proxy port first'
    },
    controller: {
      name: 'Controller',
      autoClose: 'Auto-close',
      unAvailable: 'Show UnAvailable',
      cardMode: 'Card Mode',
      sortBy: 'Sort By Delay',
      delay: 'Delay test URL',
      delayUrl: 'Please enter the delayed test URL'
    },
    connections: {
      type: 'Type',
      process: 'Process',
      processPath: 'Process Path',
      sniffHost: 'Sniff Host',
      sourceIP: 'Source',
      remoteDestination: 'Destination',
      host: 'Host',
      inbound: 'Inbound',
      rule: 'Rule',
      chains: 'Chains',
      upload: 'Upload',
      download: 'Download',
      uploadSpeed: 'UL Speed',
      downSpeed: 'DL Speed',
      time: 'Time',
      close: 'Close',
      addToDirect: 'Add To DIRECT',
      addToProxy: 'Add To PROXY',
      addToReject: 'Add To REJECT',
      active: 'Active',
      closed: 'Closed',
      closeAll: 'Close all connections',
      sort: 'Sorting and Setting Visibility',
      details: 'Connection Details'
    }
  },
  subscribe: {
    manual: 'MANUAL',
    name: 'Name',
    url: 'Remote Url',
    localPath: 'Local Path',
    convert: 'Convert Subscribe',
    website: 'Website',
    path: 'Save Path',
    include: 'Include Keywords',
    exclude: 'Exclude Keywords',
    includeProtocol: 'Include Protocol',
    excludeProtocol: 'Exclude Protocol',
    proxyPrefix: 'Proxy Prefix',
    updating: 'Updating',
    useragent: 'User-Agent',
    resetUserAgent: 'Reset User-Agent'
  },
  subscribes: {
    download: 'Download',
    upload: 'Upload',
    total: 'Total',
    expire: 'Expire',
    subtype: 'Subscription Type',
    website: 'Website',
    empty: 'The subscription list is empty. Please {action} a subscription first.',
    enterLink: 'Enter subscription link',
    proxyCount: 'Proxy Count',
    editProxies: 'Edit Proxies',
    proxies: {
      type: 'Protocol',
      name: 'Name',
      add: 'Add Proxy'
    }
  },
  profile: {
    name: 'Name',
    generalSettings: 'General Settings',
    advancedSettings: 'Advanced Settings',
    step: {
      name: 'Name',
      general: 'General',
      tun: 'TUN',
      dns: 'DNS',
      groups: 'Proxy Groups',
      dnsRules: 'DNS Rules',
      rules: 'Route Rules'
    },
    proxies: 'Reference proxies',
    use: 'Reference subscriptions',
    noSubs: 'There are no available subscriptions.',
    group: 'Group Details',
    rule: 'Rule Details'
  },
  profiles: {
    shouldStop: 'Unable to delete, this profile is in use.',
    empty: 'The profiles list is empty, Please {action} a profile first.',
    copytoClipboard: 'Generate config to clipboard',
    copy: 'Copy and Paste',
    start: 'Start/Restart with this Profile'
  },
  ruleset: {
    manual: 'MANUAL',
    format: {
      name: 'Format',
      source: 'Source',
      binary: 'Binary'
    },
    rulesetType: 'Ruleset Type',
    name: 'Name',
    url: 'Remote Url',
    path: 'Save Path',
    interval: 'Interval',
    updating: 'Updating'
  },
  rulesets: {
    empty: 'The ruleset list is empty. Please {action} a ruleset first.',
    rulesetCount: 'Ruleset Count',
    editRuleset: 'Edit Ruleset File'
  },
  plugin: {
    trigger: 'Trigger',
    'on::manual': 'on::manual',
    'on::startup': 'on::startup',
    'on::shutdown': 'on::shutdown',
    'on::generate': 'on::generate',
    'on::subscribe': 'on::subscribe',
    name: 'Name',
    description: 'Description',
    url: 'Remote Url',
    install: 'Installation required',
    installed: 'Installed',
    path: 'Save Path',
    type: 'Type',
    menus: 'Menus',
    configuration: ' Configuration',
    menuKey: 'Menu Title',
    menuValue: 'Trigger function name',
    selectComponent: 'Select a component',
    confName: 'Name',
    confDescription: 'Description',
    confKey: 'Key',
    confDefault: 'Default',
    options: 'Options',
    restore: 'Restore to default'
  },
  plugins: {
    updating: 'Updating',
    empty: 'The plugin list is empty. Please {action} or {import} a plugin first.',
    source: 'Source',
    reload: 'Reload',
    configuration: 'Configure',
    hub: 'Plugin-Hub',
    update: 'Update List',
    updateSuccess: 'updated successfully',
    total: 'Number of plug-ins'
  },
  scheduledtask: {
    name: 'Name',
    type: 'Type',
    script: 'Script',
    subscriptions: 'Subscriptions',
    rulesets: 'Rulesets',
    plugins: 'Plugins',
    cron: 'Cron',
    notification: 'Task Completed Notification',
    cronTips: 'Seconds Minutes Hours "Day of month" Month "Day of week"',
    lastTime: 'Last Time',
    'update::subscription': 'update::subscription',
    'update::ruleset': 'update::ruleset',
    'update::plugin': 'update::plugin',
    'run::plugin': 'run::plugin',
    'run::script': 'run::script'
  },
  scheduledtasks: {
    logs: 'Logs',
    name: 'Plugin',
    duration: 'Duration',
    startTime: 'Start Time',
    endTime: 'End Time',
    time: 'Time',
    result: 'Result',
    empty: 'The scheduled task list is empty. Please {action} a scheduled task first.'
  },
  settings: {
    general: 'General',
    theme: {
      name: 'Theme',
      light: 'Light Mode',
      dark: 'Dark Mode',
      auto: 'System'
    },
    color: {
      name: 'Color',
      default: 'Default',
      orange: 'Orange',
      pink: 'Pink',
      red: 'Red',
      skyblue: 'Skyblue',
      green: 'Green'
    },
    fontFamily: 'Font-Family',
    resetFont: 'Reset Font-Family',
    appFolder: {
      name: 'App Folder',
      open: 'Open application folder'
    },
    kernelCache: {
      name: 'Kernel Cache',
      clear: 'Clear kernel cache'
    },
    lang: {
      name: 'Language',
      zh: '简体中文',
      en: 'English'
    },
    windowState: {
      normal: 'Normal window',
      maximised: 'Maximised',
      minimised: 'Minimize window',
      fullscreen: 'Fullscreen'
    },
    needRestart: 'Restart Required',
    needAdmin: 'Admin required',
    exitOnClose: 'Exit On Close Window',
    closeKernelOnExit: 'Close Kernel On Exit App',
    autoSetSystemProxy: 'Auto Set / Clear System Proxy',
    autoStartKernel: 'Auto Start Kernel',
    admin: 'Run As Admin',
    addToMenu: 'Add Plugin To Menu',
    startup: {
      name: 'Startup on boot',
      delay: 'Delay(s)'
    },
    kernel: {
      branch: 'Branch',
      main: 'Main branch',
      latest: 'Latest branch'
    },
    userAgent: {
      name: 'User-Agent',
      reset: 'Reset User-Agent'
    }
  },
  about: {
    new: 'New',
    restart: 'Restart APP',
    noDownloadLink: 'No download link found',
    updateSuccessfulRestart: 'Update completed, please restart the App',
    updateSuccessful: 'Update completed',
    newVersion: 'New version found',
    latestVersion: 'Already the latest version'
  },
  titlebar: {
    resetSize: 'Reset window',
    reload: 'Reload'
  },
  format: {
    seconds: 'Seconds',
    minutes: 'Minutes',
    hours: 'Hours',
    days: 'Days',
    months: 'Months',
    years: 'Years',
    second: 'Second',
    minute: 'Minute',
    hour: 'Hour',
    day: 'Day',
    month: 'Month',
    year: 'Year',
    ago: 'Ago',
    later: 'Later'
  },
  outbound: {
    select: '🚀 Select',
    urltest: '🎈 Auto Select',
    direct: '🎯 Direct',
    block: '🛑 Block',
    fallback: '🐟 Fallback'
  },
  tray: {
    restart: 'Restart',
    restartTip: 'Restart App',
    exit: 'Exit',
    exitTip: 'Exit App',
    proxyGroup: 'Proxy Group',
    setSystemProxy: 'Set System Proxy',
    clearSystemProxy: 'Clear System Proxy',
    tun: 'Tun Mode',
    enableTunMode: 'Enable Tun Mode',
    disableTunMode: 'Disable Tun Mode',
    kernel: 'Kernel',
    proxy: 'System Proxy',
    startKernel: 'Start Kernel',
    stopKernel: 'Stop Kernel',
    restartKernel: 'Restart Kernel',
    plugins: 'Plugins'
  },
  commands: {
    noMatching: 'No matching commands'
  }
}
