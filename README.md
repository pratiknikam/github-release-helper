# Github Release Helper

<img src="https://media.giphy.com/media/7JsCLgMABoNIorie9o/giphy.gif" width="600" />

## What is this?

This a Google Chrome extension which helpes you to create release notes on Github with single click.

## Is this available on Google Chrome Extension Store?

Unfortunately no. Google keeps taking down this app without clear explanation.

## How do I use it then? 

It's simple, Google Chrome allows uploading chrome extension bundle. Follow these steps.

1. Click on **Clone or Download** button and then hit **Download**. Alternatively you can [click Here](https://github.com/pratiknikam/github-release-helper/archive/master.zip) for direct download.

    <img src="https://user-images.githubusercontent.com/2853953/43041357-ddde3a20-8d2b-11e8-801a-6d43aa947282.png" width="300" />


2. Unzip downloaded folder.

3. Open **Google Chrome** and navigate to **Window > Extensions**.

4. Turn on developer mode. Option is located on top right corner.

    <img src="https://user-images.githubusercontent.com/2853953/43041362-17272760-8d2c-11e8-8827-9f0bdf8de142.png" width="150" />

5. Click on **Load Unpacked** and select folder you unzipped at step two.

    <img src="https://user-images.githubusercontent.com/2853953/43041369-3457acce-8d2c-11e8-97d7-e5f054bb01cf.png" width="300" />

6. Extension **Github Release Helper** is added and ready to use. Head over to create pull request on Github and once page is loaded, hit **Github Release Helper Icon**.

## Options

You are able to configure a few things:

### Blacklist
Ignore commits which messages have the words defined on the blacklist.
By default the keywords `^merge`, `tests` and `lint` are configured.

_You can separate the keywords by comma. It also accepts regex syntaxes._

### Jira Tickets
Define the Jira base URL that will be used to generate Jira Ticket links.

_i.e.: https://my-jira-project.atlassian.com/browse_

_The tickets are identified from the branch name and the commit messages, by the pattern of uppercase letters followed by a dash and numbers. i.e.: ABC-123_

## Contribution

Feel free to submit a pull request for additional features. Head over to [Issues](https://github.com/pratiknikam/github-release-helper/issues) section for ideas.
