// Base
import * as styles from './TitleLayout.styles'
import React, { ReactNode } from 'react';
// Components
import TitleHeader from "../../components/TitleHeader/TitleHeader"


export function TitleLayout({title, children}: {title: string, children: ReactNode}) {
    return (
        <>
            <TitleHeader title={ title } />
            <styles.Main>{ children }</styles.Main>
        </>
    )
}
