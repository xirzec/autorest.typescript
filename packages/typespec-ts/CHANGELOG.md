## 0.13.4 (2023-06-30)

- [Feature] Ignore client.tsp in RLC generation. Please refer to pr [#1896](https://github.com/Azure/autorest.typescript/pull/1896).
- [Feature] Add collection format helper for number array. Please refer to pr [#1907](https://github.com/Azure/autorest.typescript/pull/1907).
- [Bugfix] Fix core error model generation failure during deserialization in Modular generation. Please refer to pr [#1904](https://github.com/Azure/autorest.typescript/pull/1904).

## 0.13.3 (2023-06-14)

- [Bugfix] Fix isUnexpected helper function in health insights case. Please refer to pr [#1889](https://github.com/Azure/autorest.typescript/pull/1889).

## 0.13.2 (2023-06-13)

- [Feature] Support typespec compiler 0.45.0, Please refer to pr [#1881](https://github.com/Azure/autorest.typescript/pull/1881).
- [Bugfix] Fix series of issues in RLC. Please refer to pr [#1885](https://github.com/Azure/autorest.typescript/pull/1885), [#1884](https://github.com/Azure/autorest.typescript/pull/1884) and [#1879](https://github.com/Azure/autorest.typescript/pull/1879).
- [Bugfix] Fix header collectionFormat issue in RLC. Please refer to pr [#1878](https://github.com/Azure/autorest.typescript/pull/1878)

## 0.13.1 (2023-06-02)

- [Feature] Support overload and sharedRoute in TypeSpec TS emitter. Please refer to pr [#1848](https://github.com/Azure/autorest.typescript/pull/1848).
- [Feature] Make subscriptionId optional if there are tenant level operations. Please refer to pr [#1869](https://github.com/Azure/autorest.typescript/pull/1869).
- [Feature] Respect client decorator when generate RLC client. Please refer to pr [#1876](https://github.com/Azure/autorest.typescript/pull/1876).
- [Bugfix] Improve the Modular generation with a bunch of issue fixes. Please refer to pr [#1836](https://github.com/Azure/autorest.typescript/pull/1836) and [#1861](https://github.com/Azure/autorest.typescript/pull/1861).
- [Bugfix] Fix issue in encode decorator support and doc in param tag. Please refer to pr [#1875](https://github.com/Azure/autorest.typescript/pull/1875) and [#1846](https://github.com/Azure/autorest.typescript/pull/1846).

## 0.13.0 (2023-05-15)

- [Feature] Support typespec compiler 0.44.0 and support @encode feature, Please refer to pr [#1829](https://github.com/Azure/autorest.typescript/pull/1829).
- [Feature] Support logger option, Please refer to pr [#1827](https://github.com/Azure/autorest.typescript/pull/1827).
- [Feature] Upgrade core-lro to v2.5.3, Please refer to pr [#1831](https://github.com/Azure/autorest.typescript/pull/1831).
- [Bugfix] Fix paging model issue. Please refer to pr [#1844](https://github.com/Azure/autorest.typescript/pull/1844).

## 0.12.0 (2023-04-20)

- [Feature] Support typespec compiler 0.43.0, Please refer to pr [#1813](https://github.com/Azure/autorest.typescript/pull/1813).

## 0.11.0 (2023-03-16)

- [Feature] Rename to typespec-ts. Please refer to pr [#1782](https://github.com/Azure/autorest.typescript/pull/1782).
- [Feature] Add support for null type. Please refer to pr [#1767](https://github.com/Azure/autorest.typescript/pull/1767).
- [Feature] Support named unions. Please refer to pr [#1765](https://github.com/Azure/autorest.typescript/pull/1765).
- [Bugfix] Fix api-version parameter in query. Please refer to pr [#1766](https://github.com/Azure/autorest.typescript/pull/1766).

## 1.0.0-beta.10 (2023-02-14)

- [Feature] Import cadl-azure-core models from core libraries instead of generating it. Please refer to pr [#1665](https://github.com/Azure/autorest.typescript/pull/1665).
- [Feature] Support cadl compiler 0.40.0, Please refer to pr [#1750](https://github.com/Azure/autorest.typescript/pull/1750).
- [Bugfix] Fix path separator issue in Windows system. Please refer to pr [#1745](https://github.com/Azure/autorest.typescript/pull/1745).
- [Bugfix] Fix special charactor in property comment. Please refer to pr [#1726](https://github.com/Azure/autorest.typescript/pull/1726).

## 1.0.0-beta.9 (2023-02-06)

- [Feature] Upgrade core-lro to 2.5.x, Please refer to pr [#1586](https://github.com/Azure/autorest.typescript/pull/1586).
- [Feature] Support collection format, Please refer to pr [#1740](https://github.com/Azure/autorest.typescript/pull/1740).
- [Feature] Support cadl compiler 0.39.0, Please refer to pr [#1732](https://github.com/Azure/autorest.typescript/pull/1732).
- [Feature] Upgrade prettier version in the package.json, Please refer to pr [#1741](https://github.com/Azure/autorest.typescript/pull/1741).

## 1.0.0-beta.8 (2023-01-09)

- [Feature] Normalize parameter in host template and path uri, Please refer to pr [#1714](https://github.com/Azure/autorest.typescript/pull/1714).
- [BugFix] Fix a few minor issues. Please refer to pr [#1715](https://github.com/Azure/autorest.typescript/pull/1715) for more details.

## 1.0.0-beta.7 (2022-12-21)

- [Feature] Support cadl compiler 0.38.0, Please refer to issue [#1704](https://github.com/Azure/autorest.typescript/pull/1704).
- [BugFix] Fix a few minor issues. Please refer to issue [#1700](https://github.com/Azure/autorest.typescript/pull/1700) for more details.

## 1.0.0-beta.6 (2022-12-14)

- [Feature] Support ArmId schema. Please refer to issue [#1697](https://github.com/Azure/autorest.typescript/pull/1697) and issue [#1695](https://github.com/Azure/autorest.typescript/pull/1695).
- [Feature] Support multiple type union in cadl. Please refer to issue [#1694](https://github.com/Azure/autorest.typescript/pull/1694).
- [Feature] Enhance never and unknown and enum array type generation in cadl emitter. Please refer to issue [#1685](https://github.com/Azure/autorest.typescript/pull/1685) and issue [#1683](https://github.com/Azure/autorest.typescript/pull/1683).
- [Feature] Support custom wrapper in cadl emitter. Please refer to issue [#1690](https://github.com/Azure/autorest.typescript/pull/1690).
- [Feature] Sample generation enhancement. Please refer to pr [#1696](https://github.com/Azure/autorest.typescript/pull/1696).
-

## 1.0.0-beta.5 (2022-11-30)

- [Feature] Support multiple clients from Cadl. Please refer to issue [#1593](https://github.com/Azure/autorest.typescript/issues/1593).
- [Feature] Support optional parameter for parametrized host. Please refer to issue [#1635](https://github.com/Azure/autorest.typescript/issues/1635) and issue [#1667](https://github.com/Azure/autorest.typescript/issues/1667).

## 1.0.0-beta.4 (2022-11-16)

- [BugFix] Add the license header and please refer the [pr](https://github.com/Azure/autorest.typescript/pull/1663).

## 1.0.0-beta.3 (2022-11-15)

- [BugFix] Fix browser testing issue. Please refer to pr [#1656](https://github.com/Azure/autorest.typescript/pull/1656) for details.
- [BugFix] Fix the option azureSdkForJs issue. Please refer to pr [#1638](https://github.com/Azure/autorest.typescript/pull/1638) for details.
- [BugFix] Fix modle name in merge and patch issue. Please refer to pr [#1647](https://github.com/Azure/autorest.typescript/pull/1647) for details.
- [Feature] Update the contributing and readme document. Please refer to pr [#1627](https://github.com/Azure/autorest.typescript/pull/1627) for details.
- [Feature] Support multiple parameters for parametrized host. Please refer to pr [#1635](https://github.com/Azure/autorest.typescript/issues/1635)

## 1.0.0-beta.2 (2022-10-19)

- [BugFix] Fix missing peer dependencies. Please refer to [#1612](https://github.com/Azure/autorest.typescript/pull/1612) and [#1610](https://github.com/Azure/autorest.typescript/pull/1610) for further details.
- [Feature] Support sdk-folder in cadl emitter for automation script. Please refer to [#1613](https://github.com/Azure/autorest.typescript/pull/1613) for further details.

## 1.0.0-beta.1 (2022-10-13)

- Initial preview release of the Autorest Typescript/Javascript Cadl RLC Emitter.
