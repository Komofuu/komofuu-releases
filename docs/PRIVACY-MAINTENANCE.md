# Publisher privacy maintenance

Use Komofuu in ordinary branding and copyright notices for rights held by the project. Keep required publisher/controller identification accessible through legal.html. Do not password-protect it or block crawlers in robots.txt: they must be able to read its noindex directive.

The noindex directive is a search-engine request, not access control, and does not remove old search results, Git history, forks, installed copies or downloaded archives. Historical installers and their matching LEGAL.txt must not be overwritten. Prior grants and third-party attributions remain intact.

For future local command-line commits, run `powershell -File scripts/configure-git-privacy.ps1` once in each checkout. It sets only that checkout to the Komofuu name and GitHub no-reply address. GitHub web/API commits use the account's own email settings; local Git config does not change those settings. Review GitHub email privacy separately. Never rewrite published history as part of this routine setup.

No legal conclusion that every middle name is mandatory or optional is implied. The canonical identification is preserved; ordinary documentation refers to it rather than repeating it.
