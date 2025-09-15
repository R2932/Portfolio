// app/loading.tsx

import { LoaderThree } from "@/components/ui/loader"; // Make sure the path is correct

export default function Loading() {
  // You can add any UI here, but a centered loader is common.
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <LoaderThree />
    </div>
  );
}