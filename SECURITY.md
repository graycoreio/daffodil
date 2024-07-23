# Security Policy

The policy applies to [Daffodil]((https://github.com/graycoreio/daffodil)) **AND** its dependencies.

## Spirit of the Policy

It is important to understand that Daffodil is a client-side framework, and thus, must necessarily run code in an end-user's browser. As such, we must take special precaution to ensure that the code that we deliver is well understood and secure. At the same time, there's also a **limitation** to what we can protect. For example, we can't prevent a platform dependency (e.g. Magento) from having bad security. We can't prevent you, the consumer of a given platform, from using the aforementioned platform, as such, this policy can only cover the code that Daffodil delivers or requires.

## Supported Versions

Currently, as Daffodil is experimental and pre-release, any fixes for discovered vulnerabilities **will NOT** be backported into into prior releases. We will release an appropriate [semver release](https://semver.org/), depending on the impact of the change, as soon as possible.

## Reporting a Vulnerability

Please report any security vulnerabilities that you find via an email to `hello@graycore.io`.

> Please sign your message with the PGP key associated with your Github account (or any account that we can publicly verify).

### Acceptable Scope
We will review **any** and **all** messages sent to us, but the following types of vulnerabilities are examples of acceptable scope for resolution under this security policy.

Any code in Daffodil (or a dependency) that would create any of:

* DoS vulnerability
  * E.g. a guard that causes an infinite loop during a server-side render.
* XSS Vulnerability
* Supply-chain attacks
* Remote Code Execution
* Privilege Escalation

#### Dependencies

In the event that we do not control a dependency, or are unable to get in touch with the maintainer of the dependency in order to resolve in a timely manner, we will either:

1. Work to mitigate the vulnerability within Daffodil, if possible.
2. Drop the dependency

If a patched version of the dependency exists, we will release a semver update with the patched dependency.

### Not Acceptable Scope

1. Utilizations of Daffodil with existing known vulnerabilities (e.g. someone with an ecommerce site using Daffodil on an unsupported version).
2. Vulnerabilities in components that are not defined [within our dependency set](/package.json).
3. Vulnerabilities within the platforms that our drivers support, e.g. (non-exhaustively):
  * CSRF vulnerabilities for platforms that don't support CSRF
  * Data-extraction for platforms that don't support store tokens in http-only cookies
  * Weak password constraints
  * Password Tokens found in password reset requests.

### Bug Bounties
Daffodil currently does not offer a monetary bug bounty. Yet, if you find a vulnerability and disclose it responsibly with good effort, we **will** find a way to feature you and your work. 

The [Acceptable Scope](./#acceptable-scope) outlines the attack surface covered for bounties. 

Additionally, the following basic "good faith" rules apply:

#### Use your brain
Think first, if you're uncertain whether or not you will be able to access a system you should not be able to, please reach out first and we happily will work with you to safely test the vulnerability. 

#### Do no harm
No matter the scenario you are penetration testing, **do not** damage or leave a system in a more vulnerable state than when you arrived. 

#### Do not attack users
Don't attack a company that uses Daffodil and claim we told you to. We explicitly have not.

#### Do not traverse
If you uncover a vulnerability that would provide you access to a system you should not have access to, **stop immediately** as you have achieved the maximal scope under this policy. 