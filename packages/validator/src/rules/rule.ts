// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {Context} from '../context';
import {RequireBuildScript} from './require-build-script';
import {RequireCliDep} from './require-cli-dep';
import {RequireCodegenScript} from './require-codegen-script';
import {RequireValidManifest} from './require-valid-manifest';

export enum RuleType {
  PackageJSON = 'packageJSON',
  Schema = 'schema',
}

export interface Rule {
  type: RuleType;
  name: string;
  description: string;

  validate(ctx: Context): boolean;
}

export const commonRules: Rule[] = [
  new RequireBuildScript(),
  new RequireCodegenScript(),
  new RequireCliDep(),
  new RequireValidManifest(),
];
