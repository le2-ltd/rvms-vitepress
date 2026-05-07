<template>
  <section class="figma-landing" aria-labelledby="site-hero-title">
    <section class="figma-hero">
      <div class="figma-theme-toggle-zone">
        <button
          class="figma-theme-toggle"
          type="button"
          :aria-label="isDark ? '切换浅色模式' : '切换深色模式'"
          :title="isDark ? '切换浅色' : '切换深色'"
          @click="toggleTheme"
        >
          <span
            class="figma-theme-toggle__icon"
            :class="isDark ? 'figma-theme-toggle__icon--sun' : 'figma-theme-toggle__icon--moon'"
            aria-hidden="true"
          ></span>
        </button>
      </div>
      <div class="figma-wrap figma-hero__inner">
        <div class="figma-intro">
          <p class="figma-label">{{ hero.eyebrow }}</p>
          <h1 id="site-hero-title">{{ hero.title }}</h1>
          <p class="figma-copy">{{ hero.tagline }}</p>
          <div class="figma-actions" aria-label="首页首屏操作">
            <a
              v-for="action in hero.actions"
              :key="action.text"
              class="figma-button"
              :class="`figma-button--${action.theme}`"
              :href="action.link"
            >
              {{ action.text }}
            </a>
          </div>
        </div>

        <div class="figma-hero__visual" aria-label="智行租赁产品图标">
          <div class="figma-hero__glow" aria-hidden="true"></div>
          <img src="/favicon.ico" alt="智行租赁" />
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--soft">
      <div class="figma-wrap figma-split">
        <div class="figma-intro">
          <p class="figma-label">租赁业务运营中枢</p>
          <h2>管好车辆、订单、资金和风险</h2>
          <p class="figma-copy">
            从签约收款、验车交付到续租换车、退车结算，关键动作都有状态、凭证和负责人，减少漏单和跨岗位反复确认。
          </p>
          <div class="figma-actions" aria-label="首页落地页操作">
            <a class="figma-button figma-button--primary" href="/overview/what-features">查看功能</a>
            <a class="figma-button figma-button--secondary" href="/overview/featured-functions">特色能力</a>
            <a class="figma-button figma-button--secondary" href="/overview/version-introduction">版本方案</a>
            <a class="figma-button figma-button--magenta" :href="demoUrl" target="_blank" rel="noreferrer">进入演示</a>
          </div>
          <div class="figma-tags" aria-label="核心能力">
            <span v-for="tag in dashboard.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>

        <div class="figma-product" aria-label="智行租赁运营看板示意">
          <div class="figma-product__top">
            <span>Dashboard</span>
            <strong>智行租赁</strong>
            <em>在线协同</em>
          </div>
          <div class="figma-product__body">
            <div class="figma-product__metrics">
              <article v-for="item in dashboard.metrics" :key="item.title" class="figma-card">
                <span class="figma-label">{{ item.label }}</span>
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </article>
            </div>
            <div class="figma-product__cards">
              <article v-for="item in dashboard.cards" :key="item.title" class="figma-card">
                <span class="figma-label">{{ item.label }}</span>
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--cream">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">经营结果</p>
            <h3>减少漏单，风险早发现</h3>
          </div>
          <p class="figma-copy">
            租前准备、租中跟踪和租后结算都在同一套数据里，异常有提醒、过程有记录、责任可追溯。
          </p>
        </div>
        <div class="figma-grid figma-grid--4">
          <article v-for="item in outcomes.items" :key="item.title" class="figma-card figma-card--numbered">
            <span class="figma-card__index">{{ item.index }}</span>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </article>
        </div>
        <div class="figma-grid figma-grid--3 figma-grid--mt" aria-label="经营闭环补充内容">
          <article v-for="item in outcomes.details" :key="item.title" class="figma-card">
            <span class="figma-label">{{ item.label }}</span>
            <strong>{{ item.title }}</strong>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--soft" aria-labelledby="workflow-title">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">业务流程</p>
            <h3 id="workflow-title">节点接力，责任清楚</h3>
          </div>
          <p class="figma-copy">建档、签约、出车、跟踪、续租和结算都回到订单，用系统状态替代口头催办。</p>
        </div>

        <ol class="figma-grid figma-grid--6 figma-workflow">
          <li v-for="(step, index) in workflow.steps" :key="step.title" class="figma-card figma-card--numbered">
            <span class="figma-card__index">{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ step.title }}</strong>
            <p>{{ step.text }}</p>
          </li>
        </ol>

        <div class="figma-grid figma-grid--3 figma-grid--mt" aria-label="流程补充信息">
          <article v-for="item in workflow.meta" :key="item.title" class="figma-card">
            <span class="figma-label">{{ item.label }}</span>
            <strong>{{ item.title }}</strong>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--lilac" aria-labelledby="capability-title">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">能力矩阵</p>
            <h3 id="capability-title">日常能力，集中复用</h3>
          </div>
          <p class="figma-copy">车辆、订单、合同、违章、财务、权限和图片证据链不再分散在多个表格和群聊里。</p>
        </div>
        <div class="figma-grid figma-grid--4">
          <article v-for="item in capabilityMatrix.items" :key="item.title" class="figma-card">
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
            <div class="figma-tags">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--navy" aria-labelledby="roles-title">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">角色价值</p>
            <h3 id="roles-title">各岗位看该做的事</h3>
          </div>
          <p class="figma-copy">管理层看经营健康度，运营看交付进度，财务看资金状态，车管看车辆风险，数据口径保持一致。</p>
        </div>

        <div class="figma-grid figma-grid--4" aria-label="角色工作台摘要">
          <article v-for="item in roles.board" :key="item.title" class="figma-card">
            <span class="figma-label">{{ item.label }}</span>
            <strong>{{ item.title }}</strong>
          </article>
        </div>

        <div class="figma-grid figma-grid--3 figma-grid--mt">
          <article v-for="role in roles.items" :key="role.name" class="figma-card">
            <span class="figma-label">{{ role.metric }}</span>
            <h4>{{ role.name }}</h4>
            <p>{{ role.value }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--pink" aria-labelledby="plans-title">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">版本与下一步</p>
            <h3 id="plans-title">按规模选版本</h3>
          </div>
          <p class="figma-copy">管理端网页、小程序和租客端都包含在方案内，功能全部开放，不按模块拆售。</p>
        </div>

        <div class="figma-grid figma-grid--3">
          <article v-for="plan in plans.items" :key="plan.name" class="figma-card">
            <span class="figma-label">{{ plan.fit }}</span>
            <h4>{{ plan.name }}</h4>
            <strong>{{ plan.price }}</strong>
            <p>{{ plan.text }}</p>
          </article>
        </div>

        <div class="figma-next">
          <div>
            <p class="figma-copy">{{ plans.next.copy }}</p>
          </div>
          <div class="figma-grid figma-grid--3">
            <article class="figma-card figma-card--contact">
              <div>
                <span class="figma-label">{{ plans.next.contact.label }}</span>
                <p>{{ plans.next.contact.text }}</p>
              </div>
              <img :src="wechatQrSrc" alt="智行租赁微信联系方式二维码" />
            </article>
            <article class="figma-card">
              <span class="figma-label">{{ plans.next.evaluate.label }}</span>
              <p>{{ plans.next.evaluate.text }}</p>
              <a class="figma-button figma-button--primary" :href="plans.next.evaluate.link">{{ plans.next.evaluate.action }}</a>
            </article>
            <article class="figma-card">
              <span class="figma-label">{{ plans.next.demo.label }}</span>
              <p>{{ plans.next.demo.text }}</p>
              <a class="figma-button figma-button--magenta" :href="plans.next.demo.link" target="_blank" rel="noreferrer">{{ plans.next.demo.action }}</a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <footer class="figma-footer">
      <a href="http://beian.miit.gov.cn" target="_blank" rel="noreferrer">蜀ICP备2024116916号-3</a>
      <p>Copyright © 2021-{{ currentYear }} Le2.ltd 版权所有</p>
    </footer>
  </section>
</template>

<script setup>
import { useData } from 'vitepress'

const demoUrl = import.meta.env.VITE_DEMO_URL
const wechatQrSrc = '/images/wechat-contact.png'
const { isDark } = useData()
const currentYear = new Date().getFullYear()

const hero = {
  eyebrow: '智行租赁',
  title: '懂业务的租赁运营中枢',
  tagline: '把车辆、司机、订单、财务、风控和消息协同放到同一套工作台里，减少人工同步，管好车辆、资金与风险。',
  actions: [
    { theme: 'secondary', text: '功能一览', link: '/overview/what-features' },
    { theme: 'primary', text: '特色功能', link: '/overview/featured-functions' },
    { theme: 'secondary', text: '版本介绍', link: '/overview/version-introduction' }
  ]
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const dashboard = {
  tags: ['车辆资产', '租赁订单', '财务收付', '风控留痕', '合同单据', '企业微信通知', '租客端小程序', '独立部署'],
  metrics: [
    { label: '在租车辆', title: '128', text: '+12%' },
    { label: '待处理订单', title: '36', text: '今日' },
    { label: '风险提醒', title: '09', text: '需跟进' }
  ],
  cards: [
    { label: '订单状态流', title: '36 单待推进', text: '签约、出车、退车结算按节点回写。' },
    { label: '车辆风险', title: '09 项需跟进', text: '年检、保险、违章和证照集中提醒。' },
    { label: '财务对账', title: '收支可核', text: '租金、押金、退款和收据统一归集。' },
    { label: '消息触达', title: '自动提醒', text: '企业微信把待办推送给责任人。' }
  ]
}

const outcomes = {
  items: [
    { index: '01', title: '在线流转', text: '签约、验车、续租、退车按节点推进。' },
    { index: '02', title: '回到订单', text: '违章、维修、保养、收付款都能追溯。' },
    { index: '03', title: '风险早提醒', text: '年检、保险、证照、欠租和违章集中暴露。' },
    { index: '04', title: '收支可核', text: '应收、实收、押金、退款和凭证统一对账。' }
  ],
  details: [
    { label: '数据口径', title: '数据口径统一', text: '车辆、订单、财务、风控都回到同一套数据。' },
    { label: '责任定位', title: '异常责任清楚', text: '逾期、欠租、违章、证照到期能定位责任人。' },
    { label: '动作留痕', title: '管理动作可追踪', text: '提醒、处理、复核和结算形成记录。' }
  ]
}

const workflow = {
  steps: [
    { title: '建档', text: '车辆、司机、客户与租赁资料统一归档。' },
    { title: '签约', text: '合同、证件、费用规则和收款计划进入订单。' },
    { title: '出车', text: '完成发车验车，图片和交付状态完整留痕。' },
    { title: '用车跟踪', text: '违章、年检、维修、保养、保险同步跟进。' },
    { title: '续租 / 换车', text: '变更记录关联原订单，责任关系不断档。' },
    { title: '退车结算', text: '退车验车、结算审核、押金退款统一归档。' }
  ],
  meta: [
    { label: '参与角色', title: '销售 / 财务 / 车管', text: '每个节点明确负责人，交接状态跟随订单变化。' },
    { label: '业务产出', title: '订单、验车、收款留痕', text: '合同、图片、费用、违章都能追溯到具体订单。' },
    { label: '系统价值', title: '减少重复确认', text: '用系统状态替代线下催办，让异常事项更早暴露。' }
  ]
}

const capabilityMatrix = {
  items: [
    { title: '车辆全生命周期', text: '从建档、证件档案、保险、年检到维修保养，形成完整车辆资产台账。', tags: ['资产台账', '年检保险', '维修保养'] },
    { title: '租赁订单闭环', text: '签约、出车、换车、续租、退车、结算和财务流水围绕订单流转。', tags: ['订单流转', '换车续租', '退车结算'] },
    { title: '证件与合同自动化', text: '证件 OCR、合同模板、结算单和收据自动生成，减少重复录入。', tags: ['证件识别', '合同模板', '单据生成'] },
    { title: '违章年检联动', text: '对接交管 122，定时同步车辆违章与年检结果，并关联订单和司机。', tags: ['交管 122', '自动同步', '司机匹配'] },
    { title: '财务与押金管理', text: '统一管理租金、押金、退款、收付款流水、收据和结算凭证。', tags: ['收付款', '押金', '结算'] },
    { title: '风控与消息提醒', text: '年检、保险、证照、欠租和合同到期集中提醒，并通过企业微信触达。', tags: ['风险一览', '企业微信', '提前提醒'] },
    { title: '权限与操作留痕', text: '按角色控制菜单、按钮和接口权限，关键业务动作可追溯、可审计。', tags: ['角色权限', '按钮控制', '操作审计'] },
    { title: '图片证据链', text: '验车、维修、保养和出险支持图片留痕，可回溯到车辆和订单。', tags: ['图片留痕', '证据链', '自动清理'] }
  ]
}

const roles = {
  board: [
    { label: '今日待办', title: '待签约 / 待收款 / 待退车' },
    { label: '风险事项', title: '年检 / 保险 / 违章 / 证照' },
    { label: '资金跟进', title: '押金 / 租金 / 退款 / 收据' },
    { label: '消息触达', title: '合同 / 收付款 / 年检 / 续保' }
  ],
  items: [
    { name: '老板 / 管理层', metric: '经营视图', value: '一屏掌握车辆利用、订单进度、资金状态和风险事项。' },
    { name: '门店运营', metric: '交付任务', value: '按预订、签约、租车、退车、换车、续租处理日常交付。' },
    { name: '销售人员', metric: '订单状态', value: '持续跟进待签约、已签约、待交付、待续租和待结算客户。' },
    { name: '财务人员', metric: '资金状态', value: '集中处理押金、租金、退款、收据、付款计划与结算凭证。' },
    { name: '车管人员', metric: '车辆风险', value: '跟进年检、保险、维修、保养、出险、违章和验车留痕。' },
    { name: '外部协作方', metric: '授权协同', value: '修理厂、保险协作方按授权查看维修、事故、报价和处理进度。' }
  ]
}

const plans = {
  items: [
    { name: '轻量版', fit: '50 台以内', price: '¥1,300 / 年', text: '覆盖基础运营所需能力。' },
    { name: '标准版', fit: '400 台以内', price: '¥5,200 / 年', text: '满足多组织协同与精细管理。' },
    { name: '旗舰版', fit: '400 台以上', price: '¥10 / 台车 / 年', text: '支持更高并发与复杂流程。' }
  ],
  next: {
    copy: '理性评估先看功能，想快速感受产品就进演示，也可以扫码咨询演示账号。',
    contact: {
      label: '微信咨询',
      text: '扫码领演示账号，咨询价格。'
    },
    evaluate: {
      label: '理性评估',
      text: '先确认车辆、订单、财务、风控和租客端能力是否覆盖当前业务。',
      action: '先看功能',
      link: '/overview/what-features'
    },
    demo: {
      label: '体验产品',
      text: '直接进入演示站点，按签约、出车、退车结算体验管理端流程。',
      action: '进入演示',
      link: demoUrl
    }
  }
}
</script>

<style scoped lang="scss" src="./HomeLanding.scss"></style>
