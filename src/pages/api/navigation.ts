import getNavigation from 'utils/getNavigation'

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  req = req
  const sidebarDataMaster = await getNavigation()
  res.status(200).json(sidebarDataMaster)
}
