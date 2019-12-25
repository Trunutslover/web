import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Input } from '@ui/input'
import { Text } from '@ui/text'
import { Column, Layout, Row } from '@ui/layout/src'

interface Props {
  firstName: string,
  lastName: string,
  intl: InjectedIntl
}

const Profile = ({firstName, lastName, intl, onChangeFirstName, onChangeLastName}: Props) => {
  return <Column>
    <Layout basis={60}/>
    <Row>
      <Layout basis={`10%`}/>
      <Text size={`l`} weight={`medium`}>Редактировать профиль</Text>
      <Layout basis={`10%`}/>
    </Row>
    <Layout basis={20} />
    <Row>
      <Layout basis={`10%`}/>
      <Text>Имя: </Text>
      <Layout basis={20}/>
      <Input value={firstName} placeholder={`Имя`} onChange={onChangeFirstName} />
      <Layout basis={`10%`}/>
    </Row>
    <Layout basis={10} />
    <Row>
      <Layout basis={`10%`}/>
      <Text>Фамилия: </Text>
      <Layout basis={20}/>
      <Input value={lastName} placeholder={`Фамилия`} onChange={onChangeLastName} />
      <Layout basis={`10%`}/>
    </Row>
  </Column>
}

export default injectIntl(Profile)
