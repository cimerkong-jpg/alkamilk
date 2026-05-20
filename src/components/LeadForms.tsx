import { useState } from 'react';
import type { FormEvent } from 'react';
import { combos } from '../data';
import { getLandingVariant } from '../landingVariant';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';
type ConsultationFormProps = {
  compact?: boolean;
  anchorId?: string;
  title?: string;
  description?: string;
  sourceLabel?: string;
};

const submitLead = async (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const response = await fetch('/lead-submit.php', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Submit failed');
  }
};

const StatusMessage = ({ state }: { state: SubmitState }) => {
  if (state === 'success') {
    return (
      <p className="mt-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
        Đã nhận thông tin. Nhân viên sẽ liên hệ tư vấn sớm.
      </p>
    );
  }

  if (state === 'error') {
    return (
      <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700 ring-1 ring-red-100">
        Chưa gửi được form. Vui lòng kiểm tra hosting có hỗ trợ PHP hoặc thử lại.
      </p>
    );
  }

  return null;
};

export const ConsultationForm = ({
  compact = false,
  anchorId = 'lead-form',
  title = 'Để lại số điện thoại để được tư vấn miễn phí',
  description = 'Nhập tình trạng hiện tại, team sẽ gọi/nhắn lại để tư vấn cách dùng phù hợp. Không bắt buộc đặt hàng.',
  sourceLabel = 'main',
}: ConsultationFormProps) => {
  const [state, setState] = useState<SubmitState>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState('submitting');

    try {
      await submitLead(event.currentTarget);
      event.currentTarget.reset();
      setState('success');
    } catch {
      setState('error');
    }
  };

  return (
    <section id={anchorId} className={`${compact ? 'py-5 md:py-6' : 'py-8 md:py-12'} scroll-mt-20 px-4 bg-gradient-to-b from-white to-red-50`}>
      <div className={`mx-auto ${compact ? 'max-w-4xl rounded-[1.4rem] p-4 md:p-5' : 'max-w-3xl rounded-[1.75rem] p-5 md:p-7'} bg-white shadow-[0_18px_54px_rgba(127,29,29,0.10)] ring-1 ring-red-100`}>
        <div className={`${compact ? 'grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-center' : ''}`}>
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-red-600">Free consultation</p>
            <h2 className={`${compact ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'} font-black text-gray-950`}>{title}</h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-gray-600 md:text-base">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-bold text-gray-600">
              <span className="rounded-full bg-red-50 px-3 py-1.5 text-red-700 ring-1 ring-red-100">Tư vấn miễn phí</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700 ring-1 ring-emerald-100">Không cần thanh toán trước</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`${compact ? 'mt-0 grid gap-3 md:grid-cols-[1fr_0.85fr_auto]' : 'mt-5 space-y-4'}`}>
            <input type="hidden" name="form_type" value="consultation" />
            <input type="hidden" name="source" value={`${getLandingVariant()}-${sourceLabel}`} />

            <label className="block">
              <span className="mb-2 block text-sm font-black text-gray-900">Tình trạng hiện tại</span>
              <textarea
                name="condition"
                required
                rows={compact ? 2 : 4}
                placeholder="Đau gối, đau lưng, đứng lâu mỏi..."
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-black text-gray-900">Số điện thoại</span>
              <input
                name="phone"
                required
                inputMode="tel"
                placeholder="Số điện thoại"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
              />
            </label>

            <div className={compact ? 'self-end' : ''}>
              <button
                type="submit"
                disabled={state === 'submitting'}
                className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-5 text-sm font-black text-white shadow-xl transition active:scale-[0.98] disabled:opacity-70 md:text-base"
              >
                {state === 'submitting' ? 'Đang gửi...' : 'Nhận tư vấn free'}
              </button>
            </div>
          </form>
        </div>

        <StatusMessage state={state} />
      </div>
    </section>
  );
};

const OrderForm = () => {
  const [state, setState] = useState<SubmitState>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState('submitting');

    try {
      await submitLead(event.currentTarget);
      event.currentTarget.reset();
      setState('success');
    } catch {
      setState('error');
    }
  };

  return (
    <section id="order-form" className="scroll-mt-20 px-4 py-8 md:py-12 bg-gradient-to-b from-white to-red-50">
      <div className="mx-auto max-w-4xl rounded-[1.75rem] bg-white p-5 shadow-[0_24px_70px_rgba(127,29,29,0.12)] ring-1 ring-red-100 md:p-7">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-red-600">Order form</p>
        <h2 className="text-2xl font-black text-gray-950 md:text-4xl">Đăng ký đặt combo AlkaMilk</h2>
        <p className="mt-2 text-sm font-medium leading-relaxed text-gray-600 md:text-base">
          Điền tình trạng, thông tin liên hệ và combo muốn mua. Nhân viên sẽ xác nhận lại trước khi giao.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 grid gap-4 md:grid-cols-2">
          <input type="hidden" name="form_type" value="order" />
          <input type="hidden" name="source" value={getLandingVariant()} />

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-black text-gray-900">Tình trạng hiện tại của bạn</span>
            <textarea
              name="condition"
              required
              rows={3}
              placeholder="Ví dụ: đau gối, đau lưng, đứng lâu mỏi..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Họ tên</span>
            <input name="name" required placeholder="Tên người nhận" className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Số điện thoại</span>
            <input name="phone" required inputMode="tel" placeholder="Số điện thoại" className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Combo muốn đặt</span>
            <select name="combo" required className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100">
              {combos.map((combo) => (
                <option key={combo.id} value={`Mua ${combo.buy} Tang ${combo.free}`}>
                  Mua {combo.buy} Tặng {combo.free} - nhận {combo.buy + combo.free} hộp
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-gray-900">Khu vực nhận hàng</span>
            <input name="area" required placeholder="Ví dụ: Đài Bắc, Đào Viên, Đài Trung..." className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100" />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-black text-gray-900">Địa chỉ / ghi chú thêm</span>
            <textarea name="note" rows={3} placeholder="Địa chỉ, thời gian nhận hàng, ghi chú..." className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100" />
          </label>

          <button
            type="submit"
            disabled={state === 'submitting'}
            className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-5 text-base font-black text-white shadow-xl transition active:scale-[0.98] disabled:opacity-70 md:col-span-2"
          >
            {state === 'submitting' ? 'Đang gửi...' : 'Hoàn tất đăng ký đặt hàng'}
          </button>
        </form>

        <StatusMessage state={state} />
      </div>
    </section>
  );
};

const LeadForms = () => {
  const variant = getLandingVariant();

  if (variant === 'conversion') {
    return (
      <ConsultationForm
        title="Nhận tư vấn miễn phí theo tình trạng của bạn"
        description="Để lại số điện thoại, nhân viên sẽ tư vấn cách dùng phù hợp trước khi bạn quyết định mua."
        sourceLabel="main"
      />
    );
  }

  if (variant === 'alkamilk-sale') return <OrderForm />;

  return null;
};

export default LeadForms;
