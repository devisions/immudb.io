(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{230:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"notarization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notarization","aria-hidden":"true"}},[t._v("#")]),t._v(" Notarization")]),t._v(" "),a("p",[t._v("Notarization is a process of creating an immutable blockchain entry that contains asset metadata so it can be used in the future authentication of a digital asset. It is a three-part process that includes the vetting of a signer's identity, the signer testifying to the asset's "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(", and the recording of that asset's metadata (signer identity, unique digital fingerprint, "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(", etc.) into an official record stored on the blockchain. This way interested parties can authenticate with certainty if an asset is trusted, who testified to its trust and how they have proven who they are.")]),t._v(" "),a("p",[a("strong",[t._v("Part 1 of Notarization - Signer Identity Verification")])]),t._v(" "),a("p",[t._v("The first part of the notary process happens when a user verifies their identity through one or more of the following ways: email, social, government ID, or address verification. Identity verification changes a user’s trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(". The trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(" a user has when they notarize an asset is inserted into that asset’s metadata and appended to the blockchain.")]),t._v(" "),a("p",[t._v("Note: If the user later changes their trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(", the assets they notarized prior to the change will still reflect their previous trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(", i.e. the trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(" the user had when they originally notarized that specific asset. For example, say a user notarizes an asset when they had a trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(" of 2, but they later upgraded their trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(" to 3. When that asset is authenticated, it would return metadata saying the notarizing user had a trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(" of 2, even after the user upgraded their trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(". This is why you want to verify your identity at the highest trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(" before you start notarizing assets.")]),t._v(" "),a("p",[a("strong",[t._v("Part 2 of Notarization - Testifying to an Asset’s Trustworthiness")])]),t._v(" "),a("p",[t._v("CodeNotary allows users to independently testify to an asset’s trust "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(" and immutably store their attestation on the blockchain through the notarization process. The notary process is initiated by a user (the signer) and executed by running the command:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vcn notarize")]),t._v(" which sets the asset’s "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(" equal to "),a("strong",[t._v("TRUSTED")])])]),t._v(" "),a("p",[t._v("(Subsequent changes in status are revocations of trust. See the section below on Revocation for more information.)")]),t._v(" "),a("p",[a("strong",[t._v("Part 3 of Notarization - Creating Asset Metadata and Recording it on the Blockchain")])]),t._v(" "),a("p",[t._v("When the signer initiates the notarization process, their block of digital data ("),a("em",[t._v("the asset")]),t._v(") is input into a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/SHA-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("SHA-256"),a("OutboundLink")],1),t._v(" hashing function in order to produce their asset’s unique digital fingerprint. (The digital fingerprint is also known as the digest or simply "),a("em",[t._v("the hash")]),t._v(".)")]),t._v(" "),a("p",[t._v("Then, the hash (not the asset itself, which is never uploaded to nor shared with CodeNotary) along with the desired "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(" is cryptographically signed by using the signer's secret (private key). Signing takes place locally on the signer’s machine.\nOnce signed, this metadata (i.e. the signed hash and status) is sent to a Smart Contract on the blockchain. The Smart Contract then adds the signer’s trust "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(" and a timestamp to the already existing metadata.")]),t._v(" "),a("p",[t._v("In the end, the output of the notarization process is a new entry on the "),a("a",{attrs:{href:"https://zerotrustconsortium.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZTC"),a("OutboundLink")],1),t._v(" blockchain, where it remains forever and can never be changed. The entry contains the asset’s signed hash, signed "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(", "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(", and timestamp, which are all bound together.  Attribute mapping and descriptions are below:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Label")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("Owner")])]),t._v(" "),a("td",[a("strong",[t._v("SignerID")])]),t._v(" "),a("td",[t._v("The public address derived from the user's secret.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Level")])]),t._v(" "),a("td",[a("strong",[t._v("Level")])]),t._v(" "),a("td",[t._v("The signer's "),a("a",{attrs:{href:"#Levels"}},[t._v("level")]),t._v(" at the time when the notarization was made. It indicates how the signer verified their identity.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Status")])]),t._v(" "),a("td",[a("strong",[t._v("Status")])]),t._v(" "),a("td",[t._v("The asset's "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(" chosen by the signer at the time when the notarization was made.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Timestamp")])]),t._v(" "),a("td",[a("strong",[t._v("Date")])]),t._v(" "),a("td",[t._v("The date and time of the notarization.")])])])]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("Field")]),t._v("s are names used to map "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn/blob/0.5.0/pkg/api/verify.go#L26",target:"_blank",rel:"noopener noreferrer"}},[t._v("the data stored onto the blockchain"),a("OutboundLink")],1),t._v(", "),a("em",[t._v("Label")]),t._v("s are used by "),a("code",[t._v("vcn")]),t._v(" when printing results.")])]),t._v(" "),a("h1",{attrs:{id:"revocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revocation","aria-hidden":"true"}},[t._v("#")]),t._v(" Revocation")]),t._v(" "),a("p",[t._v("Revocation is the process of removing an asset’s trust by changing its "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(".\nEach change in "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(" is an additional blockchain entry and includes the same fields of metadata as notarization does. Trust revocation can made by running the commands:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vcn untrust")]),t._v(" to set an asset's "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(" to equal "),a("strong",[t._v("UNTRUSTED")])]),t._v(" "),a("li",[a("code",[t._v("vcn unsupport")]),t._v(" to set an asset's "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(" to equal "),a("strong",[t._v("UNSUPPORTED")])])]),t._v(" "),a("h1",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication","aria-hidden":"true"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("Authentication is the process of confirming an asset's "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(" that is recorded on the blockchain. This is usually done by running "),a("code",[t._v("vcn authenticate")]),t._v(" against an asset.")]),t._v(" "),a("p",[t._v("Given an asset as an input, the hash is computed in the same way it is in the notarization process. If any blockchain entry has a hash that matches the local asset’s newly calculated hash, then the matching result "),a("a",{attrs:{href:"#Statuses"}},[t._v("status")]),t._v(" is returned (the authentication) along with the metadata that’s bound to the matching hash. Otherwise, the returned result status equals "),a("strong",[t._v("UNKNOWN")]),t._v(".")]),t._v(" "),a("p",[t._v("Authentication is always free and can be performed by anyone, anywhere, at any time, regardless of organizational affiliation or customer freemium status.")]),t._v(" "),a("h2",{attrs:{id:"authentication-of-co-notarized-assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication-of-co-notarized-assets","aria-hidden":"true"}},[t._v("#")]),t._v(" Authentication of Co-notarized Assets")]),t._v(" "),a("p",[t._v("CodeNotary's "),a("code",[t._v("vcn")]),t._v(" application allows multiple users to notarize the same asset. The act is known as co-notarization. By default, when running the command "),a("code",[t._v("vcn authenticate")]),t._v(", a user’s last blockchain entry for the asset will be returned to them when they are logged in, regardless if the asset was co-notarized. However, all other users will be returned the last blockchain entry made by the user with the highest trust level.")]),t._v(" "),a("p",[t._v("Alternatively, it is also possible to retrieve the authentication matching a specific signer (a user or an organization) using the flag "),a("code",[t._v("--signerID")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"statuses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statuses","aria-hidden":"true"}},[t._v("#")]),t._v(" Statuses")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Code")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Color")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Error message")]),t._v(" "),a("th",[t._v("Explanation")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[a("strong",[t._v("TRUSTED")])]),t._v(" "),a("td",[a("em",[t._v("green")])]),t._v(" "),a("td",[t._v("The asset was notarized.")]),t._v(" "),a("td",[a("em",[t._v("none")])]),t._v(" "),a("td",[t._v("The blockchain indicates that the asset is authentic and the signer trusts it.")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[a("strong",[t._v("UNKNOWN")])]),t._v(" "),a("td",[a("em",[t._v("yellow")])]),t._v(" "),a("td",[t._v("The asset is not notarized.")]),t._v(" "),a("td",[a("em",[t._v("hash")]),t._v(" is not notarized "),a("em",[t._v("[by <key/list of keys/org>]")])]),t._v(" "),a("td",[t._v("No notarization is found on the blockchain for the asset.")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[a("strong",[t._v("UNTRUSTED")])]),t._v(" "),a("td",[a("em",[t._v("red")])]),t._v(" "),a("td",[t._v("The asset is untrusted.")]),t._v(" "),a("td",[a("em",[t._v("hash")]),t._v(" is untrusted "),a("em",[t._v("[by <key/list of keys/org>]")])]),t._v(" "),a("td",[t._v("The  blockchain indicates that the signer DOES NOT trust the asset.")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[a("strong",[t._v("UNSUPPORTED")])]),t._v(" "),a("td",[a("em",[t._v("red")])]),t._v(" "),a("td",[t._v("The asset is unsupported.")]),t._v(" "),a("td",[a("em",[t._v("hash")]),t._v(" is unsupported "),a("em",[t._v("[by <key/list of keys/org>]")])]),t._v(" "),a("td",[t._v("The blockchain indicates that the signer DOES NOT trust the asset because it is not supported anymore (e.g. deprecated).")])])])]),t._v(" "),a("h2",{attrs:{id:"levels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#levels","aria-hidden":"true"}},[t._v("#")]),t._v(" Levels")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Level")]),t._v(" "),a("th",[t._v("Label")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-1")]),t._v(" "),a("td",[a("strong",[t._v("DISABLED")])]),t._v(" "),a("td",[t._v("The signer's account is disabled.")])]),t._v(" "),a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[a("strong",[t._v("UNKNOWN")])]),t._v(" "),a("td",[t._v("The signer's identity is unknown.")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[a("strong",[t._v("EMAIL_VERIFIED")])]),t._v(" "),a("td",[t._v("The signer's email is verified by CodeNotary platform.")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[a("strong",[t._v("SOCIAL_VERIFIED")])]),t._v(" "),a("td",[t._v("The signer's identity is verified by social media profiles.")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[a("strong",[t._v("ID_VERIFIED")])]),t._v(" "),a("td",[t._v("The signer provided an ID document.")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[a("strong",[t._v("LOCATION_VERIFIED")])]),t._v(" "),a("td",[t._v("The signer provided a proof-of-address.")])]),t._v(" "),a("tr",[a("td",[t._v("99")]),t._v(" "),a("td",[a("strong",[t._v("VCHAIN")])]),t._v(" "),a("td",[a("em",[t._v("Reserved")])])])])]),t._v(" "),a("h2",{attrs:{id:"faqs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faqs","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQs")]),t._v(" "),a("h3",{attrs:{id:"who-what-is-performing-the-act-of-notarization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who-what-is-performing-the-act-of-notarization","aria-hidden":"true"}},[t._v("#")]),t._v(" Who/what is performing the act of notarization?")]),t._v(" "),a("p",[t._v("Notarization is performed by a combination of user action, CodeNotary OpenSource software, and a CodeNotary smart contract.")]),t._v(" "),a("h3",{attrs:{id:"who-is-the-witness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who-is-the-witness","aria-hidden":"true"}},[t._v("#")]),t._v(" Who is the witness?")]),t._v(" "),a("p",[t._v("The CodeNotary smart contract and every member node of ZTC blockchain are the witnesses who attest to the authenticity of the records stored on the blockchain.")]),t._v(" "),a("h3",{attrs:{id:"who-guarantees-that-nothing-gets-changed-after-the-notarization-has-been-processed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who-guarantees-that-nothing-gets-changed-after-the-notarization-has-been-processed","aria-hidden":"true"}},[t._v("#")]),t._v(" Who guarantees that nothing gets changed after the notarization has been processed?")]),t._v(" "),a("p",[t._v("The blockchain and the collective protection of the ZTC member nodes guarantee the records stored on the blockchain are forever immutable and authentic.")]),t._v(" "),a("h3",{attrs:{id:"who-is-the-ztc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who-is-the-ztc","aria-hidden":"true"}},[t._v("#")]),t._v(" Who is the ZTC?")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://zerotrustconsortium.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZTC"),a("OutboundLink")],1),t._v(" (Zero Trust Consortium) is the software industry’s first blockchain-based consortium that adheres to a community-led, group governance model. Its decentralized design prevents any one member from dominating control over the others, allowing verified truth to only come through group consensus. No member has the ability to unilaterally adjust, role back, or delete the history that has been recorded. The consortium makes its ledger available to the public for inspection year round, day or night.")])])}),[],!1,null,null,null);e.default=r.exports}}]);