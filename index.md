# Welcome to Study Case Github Page

Demo urls
[Json Server Heroku Url](https://alican-ertop-json-server.herokuapp.com/)
[Pixel Perfect Heroku Url](https://alican-ertop-study-case.herokuapp.com)
[Responsive Heroku Url](https://alican-ertop-res-study-case.herokuapp.com)

Project has [@reduxjs/toolkit](https://redux-toolkit.js.org/), [styled-components](https://styled-components.com/), [classnames](https://github.com/JedWatson/classnames#readme), [axios](https://axios-http.com/)

[@reduxjs/toolkit](https://redux-toolkit.js.org/) used on redux
[styled-components](https://styled-components.com/) used on input etc. creating
[classnames](https://github.com/JedWatson/classnames#readme) used on classname managing
[axios](https://axios-http.com/) used on http requests

[Json Server](https://www.npmjs.com/package/json-server) used on as backend [link is here](https://alican-ertop-json-server.herokuapp.com/)

also [SCSS](https://sass-lang.com/) used on some styling ares like pagination and colors imported project with it

No action was taken on any responsive. I think this was only POC purpose. Responsive can be done this page layout.

# Components and Containers

## Component Atom
____

## Button

created with Styled and default html button,
using like default input

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/atoms/Button/index.tsx)

| PropName | Type | Default Value| Description
| ------ | ------ | ------ | ------ |
| variant | primary, secondary, ghost | undefined | choosing how kind look
| [otherStyledButtonProps](https://styled-components.com/docs/basics#getting-started) | StyledComponent<"button"> | |

____
## Input

created with Styled and default html input,
using like default input

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/atoms/Input/index.tsx)

| PropName | Type | Default Value| Description
| ------ | ------ | ------ | ------ |
| [otherStyledInputProps](https://styled-components.com/docs/basics#getting-started) | StyledComponent<"input"> | |

____
## ChoiceInput

container created with Styled and default html div,
using like default input

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/atoms/ChoiceInput/index.tsx)

| PropName | Type | Default Value| Description
| ------ | ------ | ------ | ------ |
| [containerProps](https://github.com/alicanertop/study-case/blob/master/src/components/atoms/ChoiceInput/Container.tsx) | StyledComponent<"div">,{size,type,disabled,componentName} | |
| labelTextProps | React.HtmlHTMLAttributes< HTMLSpanElement > | |
| overlayProps | React.HtmlHTMLAttributes< HTMLSpanElement > | |
| labelProps | React.HtmlHTMLAttributes< HTMLSpanElement > | |
| componentName | string | choice-input |
| componentSize | string | 22px |
| type | checkbox,radio | |
| labelText | checkbox,radio | |
| [otherStyledInputProps](https://styled-components.com/docs/basics#getting-started) | StyledComponent<"input"> | |

____
## Loading

container created with Styled and default div tag , used for image img tag

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/atoms/Loading/index.tsx)

| PropName | Type | Default Value| Description
| ------ | ------ | ------ | ------ |
| isFixed | boolean | false | used for cover all screen
| [otherStyledDivProps](https://styled-components.com/docs/basics#getting-started) | StyledComponent<"div"> | |

____
# Component Molecules


## Pagination

ordinary pagination component

pagination item means pagination using clickable spans so this is that :)

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/molecues/Pagination/index.tsx)

| PropName | Type | Default Value| Description
| ------ | ------ | ------ | ------ |
| onChange | (params: {_limit?: number; _page?: number}) => void |  | triggered when clicked pagination item
| _page | number | 1 | current page Number
| first | {_limit?: number; _page?: number} |  | when this param has value show always first pagination item
| last | {_limit?: number; _page?: number} |  | when this param has value show always last pagination item
| next | {_limit?: number; _page?: number} |  | when this param has value next pagination item
| prev | {_limit?: number; _page?: number} |  | when this param has value prev pagination item

# Component Organisms


## Basket

using for basket on header

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/organisms/Basket/index.tsx)

____
## BrandFilter

using for Brand filtering

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/organisms/BrandFilter/index.tsx)

____
## ItemTypeFilter

using for Item Type filtering

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/organisms/ItemTypeFilter/index.tsx)

____
## Sorting

using for show sort filter components

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/organisms/Sorting/index.tsx)

____
## TagFilter

using for Tag Filtering

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/organisms/TagFilter/index.tsx)

____
## ProductList

using for Product Listing

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/organisms/ProductList/index.tsx)

| PropName | Type | Default Value| Description
| ------ | ------ | ------ | ------ |
| containerProps | [StyledComponent<"div">]((https://styled-components.com/docs/basics#getting-started))  |  |
| labelProps | React.HtmlHTMLAttributes< HTMLParagraphElement > |  |
| label | string |  |

____
## SeachableFilter

using for component organism like [BrandFilter](#BrandFilter) [ItemTypeFilter](#ItemTypeFilter) [TagFilter](#TagFilter) container

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/components/molecues/SeachableFilter/index.tsx)

| PropName | Type | Default Value| Description
| ------ | ------ | ------ | ------ |
| onSearch | (str: string) => void |  | returning searched string
| onSelect | (selectArr: { name: string; value: ''; itemCount?: number }) => void |  | returning selected item list
| data | { name: string; value: ''; itemCount?: number }[] | [] | 
| type | ChoiceInput['type'] | checkbox | 
| disableShowCount | boolean | undefined | stoping showing count numbers
| placeholder | string |  | search input placeholder
| label | [IFilterContainer[label]](#FilterContainer) |  | search input placeholder
| status | idle, loading, failed |  | search input placeholder



____
# Container

## FilterContainer

using in organism for filter components main parent,
it used on [#SeachableFilter] SeachableFilter

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/containers/FilterContainer/index.tsx)

| PropName | Type | Default Value| Description
| ------ | ------ | ------ | ------ |
| labelProps | React.HtmlHTMLAttributes< HTMLParagraphElement > |  |
| containerProps | React.HtmlHTMLAttributes< HTMLParagraphElement > | [StyledComponent<"div">]((https://styled-components.com/docs/basics#getting-started)) |
| label | string |  |

## Header

using for Header

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/containers/Header/index.tsx)

## Footer

using for Footer

[Look Code](https://github.com/alicanertop/study-case/blob/master/src/containers/Footer/index.tsx)
