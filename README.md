<p align="center">
  <img src="./public/logo.svg" height="120">
  <h1 align="center">Alding</h1>
  <p align="center">
    <img src="https://img.shields.io/badge/node-v18.+-%2340E0D0" alt="Node version badge"/> 
    <img src="https://img.shields.io/github/v/release/taedonn/alding?color=40E0D0" alt="Release badge"/>
    <img src="https://img.shields.io/github/release-date/taedonn/alding?color=40E0D0" alt="Release date badge"/>
    <img src="https://img.shields.io/badge/license-MIT-%2340E0D0" alt="License badge"/>
  </p>
</p>

`alding` is a simple animated landing page using [Next.js](https://github.com/vercel/next.js) and [TypeScript](https://github.com/microsoft/TypeScript).

- [Alding](#alding)
  - [Getting started](#getting-started)
  - [Before installing](#before-installing)
  - [Deploying your app](#deploying-your-app)
  - [Components](#components)
    - [`<Header>`](#header)
    - [`<Logo>`](#logo)
    - [`<Menu>`](#menu)
    - [`<MenuLink>`](#menulink)
    - [`<MenuList>`](#menulist)
    - [`<MenuOption>`](#menuoption)
  - [License](#license)

-----

## Getting started

`fork`, or `git clone` this repo by running the following command.

```bash
git clone --depth 1 https://github.com/taedonn/alding.git <your-directory>
```

-----

## Before installing

Make sure `node.js` version over 18 is installed on your machine.

```bash
node -v
```

> if node version is below 18, you can run one of the following commands to upgrade or change node version.

`Homebrew`

```bash
# Install node version using homebrew.
brew install node@18

# Unlink previously used node version.
brew unlink node

# Link newly installed node version.
brew link node@18
```

`nvm`

```bash
# Install node version using nvm.
nvm install v18.12.0

# Choose newly installed node version.
nvm use v18.12.0
```

`sudo`

```bash
# Install node version using sudo.
sudo n 18.12.0

# Choose newly installed node version on drop-down menu.
sudo n
```

-----

## Deploying your app

Most hosting platforms allow you to define `build` command and `output` folder:

- Build command: `npm run build` or `next build`
- Output folder: `.next`

> If you are using [Vercel](https://vercel.com), you don't need to configure any options since vercel will automatically detect output directory.

-----

## Components

`alding` requires a precise component structure in `/app/layout.tsx`:

- [`<Header>`](#header)
- [`<Logo>`](#logo)
- [`<Menu>`](#menu)
- [`<MenuLink>`](#menulink)
- [`<MenuList>`](#menulist)
- [`<MenuOption>`](#menuoption)

### `<Header>`

`<Header>` is a wrapper component of all the other header components.

| name       | type    | default | description                     |
| ---------- | ------- | ------- | ------------------------------- |
| height     | integer | 5       | Height of `<Header>`.           |
| heightUnit | string  | rem     | Unit of height. ex) px, rem, %  |

```jsx
<Header
  height={5}
  heightUnit="rem"
>
  {/* Children */}
</Header>
```

### `<Logo>`

`<Logo>` displays logo inside `<Header>`.

| name        | type    | default | description                       |
| ----------- | ------- | ------- | --------------------------------- |
| src         | string  |         | Image path of the logo.           |
| name        | string  |         | Name of the company/project/team. |
| hoverEffect | boolean | true    | Enable/disable hover effect.      |

```jsx
<Header
  height={5}
  heightUnit="rem"
>
  <Logo
    src="/logo.svg"
    name="Alding"
  />
</Header>
```

### `<Menu>`

`<Menu>` displays menu inside `<Header>`.

```jsx
<Header
  height={5}
  heightUnit="rem"
>
  <Logo
    src="/logo.svg"
    name="Alding"
  />
  <Menu>
    {/* Children */}
  </Menu>
</Header>
```

### `<MenuLink>`

`<MenuLink>` displays menu with link inside `<Menu>`

| name   | type   | default          | description                |
| ------ | ------ | ---------------- | -------------------------- |
| href   | string |                  | Anchor `href` attribute.   |
| target | string | _self            | Anchor `target` attribute. |

```jsx
<Menu>
  <MenuLink
    href="/"
    target="_blank"
  >
    LINK
  </MenuLink>
</Menu>
```

### `<MenuList>`

`<MenuList>` is a wrapper component of the popup list that will be displayed underneath when the menu hovered.

| name        | type    | default | description                   |
| ----------- | ------- | ------- | ----------------------------- |
| name        | string  |         | Name of the menu.             |
| width       | number  | 100     | Width of the menu.            |
| widthUnit   | string  | %       | Unit of width. ex) px, rem, % |
| hoverEffect | boolean | true    | Enable/disable hover effect.  |

```jsx
<Menu>
  <MenuList
    name="LINKS"
    width={12}
    widthUnit="rem"
  >
    {/* Children */}
  </MenuList>
</Menu>
```

### `<MenuOption>`

`<MenuOption>` is a component that will be displayed inside popup list of `<MenuList>`.

| name   | type   | default          | description                   |
| ------ | ------ | ---------------- | ----------------------------- |
| href   | string |                  | Anchor `href` attribute.      |
| target | string | _self            | Anchor `target` attribute.    |
| icon   | string | fa-solid fa-bolt | Font Awesome icon class name. |
| image  | string |                  | Image path.                   |

```jsx
<MenuList
  name="LINKS"
  width={12}
  widthUnit="rem"
>
  <MenuOption
    href="/"
    target="_blank"
  >
    External link
  </MenuOption>
</MenuList>
```

-----

## License

MIT License © 2023-PRESENT, Alding.
