import queryString from 'query-string'

/**
 * it will remove chars from given string
 * it using replaceAll string function
 * @param removeCharArr default value []
 * @param str defaul value ""
 * @returns
 */
const stringCharRemover = (removeCharArr: string[] = [], str: string = '') =>
  removeCharArr?.reduce((prev, current) => prev?.replaceAll(current, ''), str)

/**
 * it will parse json-server header link params to object
 * @param url
 * @param urlSplitValue default value '; rel='
 * @param remainderRemoveCharArr default value ['"']
 * @returns
 */
const getFromHeaderParsedUrl = (
  url: string,
  urlSplitValue = '; rel=',
  remainderRemoveCharArr = ['"'],
) => {
  const [path, _rel] = url.split(urlSplitValue)
  const rel = stringCharRemover(remainderRemoveCharArr, _rel)
  return { [rel]: { ...queryString.parseUrl(path, { parseFragmentIdentifier: true }).query } }
}

/**
 * it will parse json-server header link params to object
 * @param headers
 * @returns
 */
export const getPaginationFromsHeadersParams = (headers: any) => {
  const urlRemoveCharArr = [' <', '<', '>']
  const linkSplittedByComma = headers.link?.split(',') as [] | undefined
  const pageParams = linkSplittedByComma?.reduce((prev, current: string) => {
    const clearedUrl = stringCharRemover(urlRemoveCharArr, current)
    return { ...prev, ...getFromHeaderParsedUrl(clearedUrl) }
  }, {})
  return { ...pageParams, totalCount: headers?.['x-total-count'] }
}
