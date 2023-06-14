import Chance from 'chance'
import exp from 'constants'
const chance = new Chance()

export const randomUUID = () => chance.guid()
export const randomName = () => chance.name()
export const randomEMail = () => chance.email()
export const randomId = () => chance.fbid() // 파세보옥 ID
export const randomJobTitle = () => chance.profession()
export const randomCompanyName = () => chance.company()
export const randomSentese = (words = 5) => chance.sentence({words})
export const randomTitleText = (words = 3) => chance.sentence({words})
export const randomParagraphs = (sentensce = 3) => chance.paragraph({sentensce})
