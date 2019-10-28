(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{257:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vcn-powershell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vcn-powershell","aria-hidden":"true"}},[e._v("#")]),e._v(" vcn-powershell")]),e._v(" "),r("p",[e._v("PowerShell Scripts for CodeNotary vcn")]),e._v(" "),r("h2",{attrs:{id:"vcn-folder-watch-ps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vcn-folder-watch-ps","aria-hidden":"true"}},[e._v("#")]),e._v(" vcn-folder-watch.ps")]),e._v(" "),r("p",[e._v("That Powershell script watches a defined directory on your system and notarizes files that are stored here using your "),r("a",{attrs:{href:"https://dashboard.codenotary.io/auth/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeNotary.io account "),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Make sure to download the vcn binary as well: "),r("a",{attrs:{href:"https://github.com/vchain-us/vcn/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeNotary vcn cli"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("You only need to change the variables in the beginning of the script according to your environment:")]),e._v(" "),r("ul",[r("li",[e._v("$vcnpath")]),e._v(" "),r("li",[e._v("$watcher.Path")]),e._v(" "),r("li",[e._v("$watcher.IncludeSubdirectories")])]),e._v(" "),r("h3",{attrs:{id:"run-the-script-fully-automated"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-the-script-fully-automated","aria-hidden":"true"}},[e._v("#")]),e._v(" run the script fully automated")]),e._v(" "),r("p",[e._v("If you want to fully automated, please set the following environment variables:")]),e._v(" "),r("ul",[r("li",[e._v("VCN_USER")]),e._v(" "),r("li",[e._v("VCN_PASSWORD")]),e._v(" "),r("li",[e._v("VCN_NOTARIZATION_PASSWORD")])]),e._v(" "),r("p",[e._v("You can learn more about that here: "),r("a",{attrs:{href:"https://docs.codenotary.io/vcn/user-guide/environments.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeNotary vcn environment"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"vcn-folder-workflow-ps1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vcn-folder-workflow-ps1","aria-hidden":"true"}},[e._v("#")]),e._v(" vcn-folder-workflow.ps1")]),e._v(" "),r("p",[e._v("extension of vcn-folder-watch.ps to support a simple trust workflow, when files are created or moved into the specific folder. Only the last notarization action counts.")]),e._v(" "),r("ul",[r("li",[e._v("All newly created files in C:\\CodeNotary\\Production will be trusted")]),e._v(" "),r("li",[e._v("All newly created files in C:\\CodeNotary\\Old will be untrusted")]),e._v(" "),r("li",[e._v("All newly created files in C:\\CodeNotary\\Unwanted will be unsupported")])]),e._v(" "),r("h2",{attrs:{id:"function-get-cnauthenticate-ps1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#function-get-cnauthenticate-ps1","aria-hidden":"true"}},[e._v("#")]),e._v(" function-Get-CNAuthenticate.ps1")]),e._v(" "),r("p",[e._v("Get-Function to authenticate an existing file with CodeNotary.io and return the result as json")]),e._v(" "),r("p",[e._v("Load the function in your PowerShell session\n"),r("code",[e._v(". .\\function-Get-CNAuthenticate.ps1")])]),e._v(" "),r("p",[e._v("Authenticate file\n"),r("code",[e._v("get-item .\\codenotary-watcher.ps1 | Get-CNAuthenticate")])]),e._v(" "),r("p",[e._v("Check verification status\n"),r("code",[e._v("Get-CNAuthenticate -Path .\\codenotary-watcher.ps1 | select -ExpandProperty verification")])])])}),[],!1,null,null,null);t.default=a.exports}}]);