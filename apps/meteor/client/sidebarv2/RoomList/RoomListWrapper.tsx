import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ForwardedRef, HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { useSidebarListNavigation } from './useSidebarListNavigation';

type RoomListWrapperProps = HTMLAttributes<HTMLDivElement>;

const RoomListWrapper = forwardRef(function RoomListWrapper(props: RoomListWrapperProps, ref: ForwardedRef<HTMLDivElement>) {
	const t = useTranslation();
	const { sidebarListRef } = useSidebarListNavigation();
	const mergedRefs = useMergedRefs(ref, sidebarListRef);

	return <div role='list' aria-label={t('Channels')} ref={mergedRefs} {...props} />;
});

export default RoomListWrapper;
