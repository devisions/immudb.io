(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{379:function(t,s,e){"use strict";e.r(s);var a=e(44),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"immuclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#immuclient"}},[t._v("#")]),t._v(" immuclient")]),t._v(" "),e("p",[t._v("work in progress")]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#latest-binaries"}},[t._v("Latest binaries")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#build"}},[t._v("Build")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#docker"}},[t._v("Docker")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#run-immugw"}},[t._v("Use immuclient")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#examples"}},[t._v("Examples")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#auditor"}},[t._v("Auditor")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#license"}},[t._v("License")])])]),t._v(" "),e("h2",{attrs:{id:"latest-binaries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#latest-binaries"}},[t._v("#")]),t._v(" Latest binaries")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get the latest builds"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),e("p",[t._v("clone the immudb repository locally")]),t._v(" "),e("p",[e("code",[t._v("git clone https://github.com/codenotary/immudb.git")])]),t._v(" "),e("h3",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linux "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuclient-static\n")])])]),e("h3",{attrs:{id:"macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" MacOS")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("darwin "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuclient-static\n")])])]),e("h3",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("windows "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuclient-static\n")])])]),e("h2",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),e("h3",{attrs:{id:"build-your-own-docker-container-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-your-own-docker-container-image"}},[t._v("#")]),t._v(" build your own Docker container image")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker build -t myown/immuclient:latest -f Dockerfile.immuclient "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),e("h3",{attrs:{id:"run-immuclient-in-a-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immuclient-in-a-container"}},[t._v("#")]),t._v(" run immuclient in a container")]),t._v(" "),e("p",[t._v("As immuclient has a direct command and interactive, you can simply add the immuclient command after docker run.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it --rm -name immuclient codenotary/immuclient:latest -a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("immudb host"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("You can now use the interactive mode of immuclient and type commands until you type exit. Use help to get a command reference.")]),t._v(" "),e("h2",{attrs:{id:"use-immuclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-immuclient"}},[t._v("#")]),t._v(" Use immuclient")]),t._v(" "),e("p",[e("code",[t._v("immuclient help")]),t._v(" is a good starting point")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("CLI client "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" immudb - the lightweight, high-speed immutable database "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" systems and applications.\nEnvironment variables:\n  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_IMMUDB_ADDRESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_IMMUDB_PORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_AUTH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_MTLS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_SERVERNAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localhost\n  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_PKEY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./tools/mtls/4_client/private/localhost.key.pem\n  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_CERTIFICATE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./tools/mtls/4_client/certs/localhost.cert.pem\n  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_CLIENTCAS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./tools/mtls/2_intermediate/certs/ca-chain.cert.pem\n\nUsage:\n  immuclient "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nAvailable Commands:\n  audit-mode        Starts immuclient as daemon "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" auditor mode. Run "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immuclient audit-mode help'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details\n  check-consistency Check consistency "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the specified index and "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("hash")]),t._v("\n  count             Count keys having the specified prefix\n  current           Return the last merkle tree root and index stored locally\n  get               Get item having the specified key\n  getByIndex        Return an element by index\n  getRawBySafeIndex Return an element by index\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("              Help about any "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v("           Fetch "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the item having the specified key\n  inclusion         Check "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" specified index is included "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the current tree\n  iscan             Iterate over all elements by insertion order\n  login             Login using the specified username and password\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("logout")]),t._v("\n  rawsafeget        Get item having the specified key, without parsing structured values\n  rawsafeset        Set a value "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the item having the specified key, without setup structured values\n  reference         Add new reference to an existing key\n  safeget           Get and verify item having the specified key\n  safereference     Add and verify new reference to an existing key\n  safeset           Add and verify new item having the specified key and value\n  safezadd          Add and verify new key with score to a new or existing sorted "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n  scan              Iterate over keys having the specified prefix\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("               Add new item having the specified key and value\n  status            Ping to check "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" server connection is alive\n  version           Show the immuclient version\n  zadd              Add new key with score to a new or existing sorted "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n  zscan             Iterate over a sorted "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n\nFlags:\n      --audit-password string    immudb password used to login during audit\n      --audit-username string    immudb username used to login during audit\n      --certificate string       server certificate "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tools/mtls/4_client/certs/localhost.cert.pem"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --clientcas string         clients certificates list. Aka certificate authority "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tools/mtls/2_intermediate/certs/ca-chain.cert.pem"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --config string            config "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default path are configs or "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" Default filename is immuclient.toml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --dir string               Main directory "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" audit process tool to initialize "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -h, --help                     "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" immuclient\n  -a, --immudb-address string    immudb "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" address "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -p, --immudb-port int          immudb port number "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -m, --mtls                     "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" mutual tls\n      --pkey string              server private key path "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tools/mtls/4_client/private/localhost.key.pem"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --prometheus-host string   Launch "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" of the Prometheus server. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --prometheus-port string   Launch port of the Prometheus server. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9477"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --roots-filepath string    Filepath "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" storing root hashes after every successful audit loop. Default is tempdir of every OS. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --servername string        used to verify the "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v(" on the returned certificates "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --tokenfile string         authentication token "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default path is "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v(" or binary location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" default filename is token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --value-only               returning only values "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" get operations\n\nUse "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"immuclient [command] --help"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information about a command.\n")])])]),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h2",{attrs:{id:"auditor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auditor"}},[t._v("#")]),t._v(" Auditor")]),t._v(" "),e("p",[t._v("Start interactive:\n"),e("code",[t._v("immuclient audit-mode")])]),t._v(" "),e("p",[t._v("Install service:\n"),e("code",[t._v("immuclient audit-mode install")])]),t._v(" "),e("p",[t._v("**immuclient Port: 9477 - http://immuclient-auditor:9477/metrics **")]),t._v(" "),e("p",[t._v("example output:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_curr_root_per_server Current root index used for the latest audit.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_curr_root_per_server gauge")]),t._v("\nimmuclient_audit_curr_root_per_server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_prev_root_per_server Previous root index used for the latest audit.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_prev_root_per_server gauge")]),t._v("\nimmuclient_audit_prev_root_per_server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_result_per_server Latest audit result (1 = ok, 0 = tampered).")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_result_per_server gauge")]),t._v("\nimmuclient_audit_result_per_server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_run_at_per_server Timestamp in unix seconds at which latest audit run.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_run_at_per_server gauge")]),t._v("\nimmuclient_audit_run_at_per_server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".5907565337454605e+09\n")])])]),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),e("p",[t._v("immuclient is "),e("a",{attrs:{href:"LICENSE"}},[t._v("Apache v2.0 License")]),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);