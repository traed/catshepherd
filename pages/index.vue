<template>
	<MatrixWrapper :state="state" />
</template>

<script setup lang="ts">
import { MatrixState } from '~~/types/enums';

let state = MatrixState.start;
</script>
