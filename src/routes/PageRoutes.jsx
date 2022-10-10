import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { OnboardingUI1 } from '../pages/OnboardingUI1';
import { OnboardingUI2 } from '../pages/OnboardingUI2';
import { OnboardingUI3 } from '../pages/OnboardingUI3';
import { OnboardingUI4 } from '../pages/OnboardingUI4';

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingUI1 />} />
      <Route path="/step2" element={<OnboardingUI2 />} />
      <Route path="/step3" element={<OnboardingUI3 />} />
      <Route path="/step4" element={<OnboardingUI4 />} />
    </Routes>
  );
}
