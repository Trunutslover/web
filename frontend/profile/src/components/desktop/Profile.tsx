import React from "react"
import { injectIntl, InjectedIntl } from 'react-intl'
import { Input } from '@ui/input'
import { Text } from '@ui/text'

interface Props {
  intl: InjectedIntl
}

const Profile = ({firstName, lastName, intl}: Props) => {


  return <div>
    <h2>
      <Text size={`l`}>Редактировать профиль</Text>
    </h2>
    <label><Text>Имя: </Text><Input value={firstName} placeholder={`Имя`} /></label>
    <label><Text>Фамилия: </Text><Input value={lastName} placeholder={`Фамилия`} /></label>
  </div>
}

export default injectIntl(Profile)